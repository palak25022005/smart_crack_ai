import os
import json
import random
from pymongo import MongoClient
from youtube_transcript_api import YouTubeTranscriptApi
import openai
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")

def get_student_exam_type(student_id):
    client = MongoClient(MONGO_URI)
    db = client['test']
    student = db['students'].find_one({"studentId": ObjectId(student_id)})
    return student.get("exam") if student else None

def get_num_questions(student_id):
    client = MongoClient(MONGO_URI)
    db = client['test']
    student = db['students'].find_one({"studentId": ObjectId(student_id)})
    return student.get("num_questions", 30)

def get_selected_chapters(subject):
    client = MongoClient(MONGO_URI)
    db = client['test']
    chapters = db['chapters'].find({"subject": subject, "completed": True})
    return list(chapters)

def fetch_youtube_urls(subtopics):
    prompt = (
        "Generate 6 YouTube video URLs relevant to the following subtopics. "
        "Ensure the videos have English transcripts available. Subtopics: "
        + ", ".join(subtopics)
    )
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an AI that finds educational YouTube video URLs."},
                {"role": "user", "content": prompt}
            ]
        )
        youtube_urls = json.loads(response['choices'][0]['message']['content'])
        return youtube_urls if isinstance(youtube_urls, list) else []
    except Exception as e:
        print(f"Error fetching YouTube URLs: {e}")
        return []

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

def retrieve_relevant_knowledge(query):
    """Fetch external knowledge using OpenAI RAG capabilities."""
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an AI assistant that retrieves relevant information."},
                {"role": "user", "content": f"Retrieve relevant knowledge about: {query}"}
            ]
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        print(f"Error retrieving knowledge: {e}")
        return ""

def generate_mcqs(transcript_text, retrieved_knowledge, num_questions):
    prompt = (
        """
        Generate multiple-choice questions (MCQs) from the provided transcript. 
        Adhere to a difficulty distribution: 60% easy, 30% medium, and 10% hard.
        Output the MCQs in a structured JSON format, where each question is represented as a dictionary with the following keys:
        - 'question': The MCQ question text.
        - 'options': A list of four possible answer options.
        - 'correct_option': The index (1-based) of the correct answer within the 'options' list.
        - 'explanation': A concise explanation of why the 'correct_option' is the right answer.
        f"\n\nTranscript:\n{transcript_text}\n\nAdditional Knowledge:\n{retrieved_knowledge}"
        """
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
        return mcqs[:num_questions] if isinstance(mcqs, list) else []
    except Exception as e:
        print(f"Error generating MCQs: {e}")
        return []

def format_mcqs(mcqs, chapter_id, subtopic_id, subject):
    formatted_mcqs = []
    for index, mcq in enumerate(mcqs, start=1):
        formatted_mcqs.append({
            "question_number": index,
            "question_text": mcq["question"],
            "options": {
                "O1": mcq["options"][0],
                "O2": mcq["options"][1],
                "O3": mcq["options"][2],
                "O4": mcq["options"][3],
            },
            "answered_value": "",
            "correct_option": mcq["options"].index(mcq["answer"]) + 1,
            "chapter_id": chapter_id,
            "subtopic_id": subtopic_id,
            "subject": subject,
            "is_answered": False,
        })
    return formatted_mcqs

def store_mcqs_in_file(mcqs, filename="quizData.js"):
    with open(filename, "w") as file:
        file.write("export const quizData = ")
        json.dump(mcqs, file, indent=4)
        print(f"MCQs stored in {filename}!")

def main(subject):
    selected_chapters = get_selected_chapters(subject)
    if not selected_chapters:
        print("No completed chapters found.")
        return
    
    all_mcqs = []
    for chapter in selected_chapters:
        subtopics = [subtopic["name"] for subtopic in chapter.get("subtopics", [])]
        retrieved_knowledge = retrieve_relevant_knowledge(", ".join(subtopics))
        
        if not chapter.get("youtube_urls"):
            chapter["youtube_urls"] = fetch_youtube_urls(subtopics)
        
        transcripts, valid_urls = extract_transcripts(chapter["youtube_urls"])
        if not transcripts:
            print(f"No valid transcripts for {chapter['name']}. Skipping...")
            continue
        
        num_questions = chapter.get("num_questions", 30)
        mcqs = generate_mcqs(transcripts, retrieved_knowledge, num_questions)
        formatted_mcqs = format_mcqs(mcqs, chapter["_id"], chapter["subtopics"][0]["_id"], subject)
        all_mcqs.extend(formatted_mcqs)
    
    store_mcqs_in_file(all_mcqs)
    print(f"Processed {len(all_mcqs)} questions for {subject}")

if __name__ == "__main__":
    subject = input("Enter subject (Physics, Chemistry, Math): ")
    main(subject)