import os
import json
import random
# import pymongo
# from dotenv import load_dotenv
from pymongo import MongoClient
from youtube_transcript_api import YouTubeTranscriptApi
import openai

from bson import ObjectId

def get_student_exam_type(student_id):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    student = db['students'].find_one({"studentId": ObjectId(student_id)})
    return student.get("exam") if student else None

def get_num_questions(student_id):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    student = db['students'].find_one({"studentId": ObjectId(student_id)})
    return student.get("num_questions", 30)

def get_incomplete_topics(student_id, exam_type):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    collection = db['jeeexams'] if exam_type == "JEE" else db['neetexams']
    syllabus = collection.find_one({"studentId": ObjectId(student_id)})
    
    incomplete_topics = []
    if syllabus:
        for standard in syllabus["standards"]:
            for subject in standard["subjects"]:
                for chapter in subject["chapters"]:
                    if not chapter.get("completed", False):  # Process only if chapter is incomplete
                        for subtopic in chapter.get("subtopics", []):
                            incomplete_topics.append(subtopic["name"])
    return incomplete_topics

def fetch_youtube_urls(topic_name):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    topic_data = db['topics'].find_one({"name": topic_name})
    return topic_data.get("youtubeURL", [])[:6] if topic_data else []

def extract_transcripts(video_urls):
    transcripts = ""
    valid_urls = []
    for url in video_urls:
        video_id = url.split("v=")[-1]
        try:
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
            transcripts += " ".join([entry['text'] for entry in transcript]) + "\n"
            valid_urls.append(url)
        except Exception:
            print(f"Transcript not available for {url}")
    return transcripts, valid_urls

def generate_mcqs(transcript_text, num_questions):
    difficulty_distribution = {
        "easy": int(num_questions * 0.6),
        "medium": int(num_questions * 0.3),
        "hard": int(num_questions * 0.1)
    }
    while sum(difficulty_distribution.values()) < num_questions:
        difficulty_distribution["easy"] += 1
    
    prompt = (
        "Generate multiple-choice questions (MCQs) from the given transcript. "
        "Maintain the difficulty ratio as follows: 60% easy, 30% medium, 10% hard. "
        "Provide output in structured JSON format: list of dictionaries with 'question', 'options', and 'answer'. "
        "Ensure no repeated questions. Transcript:\n\n" + transcript_text
    )
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an AI that generates MCQs in JSON format."},
                {"role": "user", "content": prompt}
            ]
        )
        mcqs = json.loads(response['choices'][0]['message']['content'])
        if not isinstance(mcqs, list):
            raise ValueError("Invalid MCQ format received")
        random.shuffle(mcqs)
        return mcqs[:num_questions]
    except Exception as e:
        print(f"Error generating MCQs: {e}")
        return []

def store_mcqs(topic_name, mcqs):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    try:
        db['mcqs'].insert_one({"topic": topic_name, "mcqs": mcqs})
        print(f"MCQs for {topic_name} stored successfully!")
    except Exception as e:
        print(f"Error storing MCQs: {e}")

def mark_chapter_completed(student_id, exam_type, topic_name):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client['test']
    collection = db['jeeexams'] if exam_type == "JEE" else db['neetexams']
    syllabus = collection.find_one({"studentId": ObjectId(student_id)})
    if not syllabus:
        return
    for standard in syllabus["standards"]:
        for subject in standard["subjects"]:
            for chapter in subject["chapters"]:
                if any(subtopic["name"] == topic_name for subtopic in chapter.get("subtopics", [])):
                    all_covered = all(subtopic.get("covered", False) for subtopic in chapter["subtopics"])
                    if all_covered:
                        collection.update_one(
                            {"studentId": ObjectId(student_id), "standards.subjects.chapters.name": chapter["name"]},
                            {"$set": {"standards.$.subjects.$.chapters.$.completed": True}}
                        )
                        print(f"Marked chapter '{chapter['name']}' as completed!")

def main(student_id):
    exam_type = get_student_exam_type(student_id)
    if not exam_type:
        print("Student not found or exam type not specified.")
        return
    
    num_questions = get_num_questions(student_id)
    incomplete_topics = get_incomplete_topics(student_id, exam_type)
    if not incomplete_topics:
        print("No incomplete topics found.")
        return
    
    for topic in incomplete_topics:
        youtube_urls = fetch_youtube_urls(topic)
        transcripts, valid_urls = extract_transcripts(youtube_urls)
        if not transcripts:
            print(f"No valid transcripts available for {topic}. Skipping...")
            continue
        
        mcqs = generate_mcqs(transcripts, num_questions)
        if mcqs:
            store_mcqs(topic, mcqs)
            mark_chapter_completed(student_id, exam_type, topic)
        print(f"Processed topic: {topic}")

if __name__ == "__main__":
    student_id = input("Enter student ID: ")
    main(student_id)