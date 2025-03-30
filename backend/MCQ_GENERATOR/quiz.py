import os
import json
from pymongo import MongoClient
from youtube_transcript_api import YouTubeTranscriptApi
import google.generativeai as genai
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

def get_student_exam_type(student_id):
    client = MongoClient(MONGO_URI)
    db = client['test']
    student = db['students'].find_one({"_id": ObjectId(student_id)})
    return student.get("exam") if student else None

def get_num_questions(student_id):
    client = MongoClient(MONGO_URI)
    db = client['test']
    student = db['students'].find_one({"_id": ObjectId(student_id)})
    return student.get("num_questions", 30)

def get_selected_chapters(subject):
    client = MongoClient(MONGO_URI)
    db = client['test']
    # Corrected collection name to match the cluster
    chapters = db[subject.lower() + "s"].find({"completed": True})
    return list(chapters)

def fetch_youtube_urls(subtopics):
    prompt = (
        "Generate 6 YouTube video URLs relevant to the following subtopics. "
        "Ensure the videos have English transcripts available. Subtopics: "
        + ", ".join(subtopics)
    )
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        youtube_urls = json.loads(response.text)
        return youtube_urls.get('urls', []) if isinstance(youtube_urls, dict) and 'urls' in youtube_urls else []
    except Exception as e:
        print(f"Error fetching YouTube URLs: {e}")
        return []

def extract_transcripts(video_urls):
    transcripts = ""
    valid_urls = []
    for url in video_urls:
        try:
            video_id = url.split("v=")[-1]
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
            transcripts += " ".join([entry['text'] for entry in transcript]) + "\n"
            valid_urls.append(url)
        except Exception:
            print(f"Transcript not available for {url}")
    return transcripts, valid_urls

def retrieve_relevant_knowledge(query):
    """Fetch external knowledge using Gemini's capabilities."""
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(f"Retrieve relevant knowledge about: {query}")
        return response.text
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
        - 'answer': The correct answer within the 'options' list.
        - 'explanation': A concise explanation of why the 'answer' is the right answer.
        f"\n\nTranscript:\n{transcript_text}\n\nAdditional Knowledge:\n{retrieved_knowledge}"
        """
    )
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        mcqs = json.loads(response.text)
        return mcqs.get('questions', [])[:num_questions] if isinstance(mcqs, dict) and 'questions' in mcqs else []
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

def main(subject, student_id):
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

        num_questions = get_num_questions(student_id)
        mcqs = generate_mcqs(transcripts, retrieved_knowledge, num_questions)
        # Assuming you want to use the MongoDB _id
        formatted_mcqs = format_mcqs(mcqs, str(chapter["_id"]), str(chapter["subtopics"][0]["_id"]), subject)
        all_mcqs.extend(formatted_mcqs)

    store_mcqs_in_file(all_mcqs)
    print(f"Processed {len(all_mcqs)} questions for {subject}")

if __name__ == "__main__":
    subject = input("Enter subject (Physics, Chemistry, Math): ")
    student_id = input("Enter student ID: ")
    main(subject, student_id)