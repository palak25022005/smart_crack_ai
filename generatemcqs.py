import re
import nltk
from nltk.tokenize import sent_tokenize
from collections import Counter
import random

# Ensure required NLTK packages are downloaded
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

# Alternative function if NLTK's sent_tokenize fails
def custom_sent_tokenize(text):
    return re.split(r'(?<=[.!?])\s+', text)

# Load transcript from a file
def load_transcript(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

# Extract important words (nouns/adjectives) using simple heuristics
def extract_keywords(text):
    words = re.findall(r'\b[A-Za-z]{4,}\b', text)  # Extract words with 4+ letters
    common_words = set(nltk.corpus.stopwords.words('english'))
    keywords = [word for word in words if word.lower() not in common_words]
    return list(dict(Counter(keywords).most_common(10)).keys())  # Top 10 frequent words

# Generate MCQs from keywords
def generate_mcqs(sentences, keywords):
    mcqs = []
    for keyword in keywords:
        for sentence in sentences:
            if keyword in sentence:
                # Create a question by replacing the keyword with a blank
                question = sentence.replace(keyword, "______")
                
                # Generate random options
                options = random.sample(list(set(keywords) - {keyword}), min(3, len(keywords) - 1))
                options.append(keyword)
                random.shuffle(options)
                
                mcqs.append({"question": question, "options": options, "answer": keyword})
                break  # Move to next keyword

    return mcqs

# Save MCQs to a file
def save_mcqs(mcqs, output_file):
    with open(output_file, "w", encoding="utf-8") as file:
        for i, mcq in enumerate(mcqs, start=1):
            file.write(f"\nQ{i}. {mcq['question']}\n")
            for idx, option in enumerate(mcq['options'], start=1):
                file.write(f"   {idx}. {option}\n")
            file.write(f"   [Answer: {mcq['answer']}]\n")

# Main function
def main():
    file_path = "transcript.txt"  # Ensure this file exists
    output_file = "mcqs.txt"  # Output file to save MCQs
    transcript = load_transcript(file_path)

    # Tokenize sentences
    try:
        sentences = sent_tokenize(transcript)
    except:
        sentences = custom_sent_tokenize(transcript)

    # Extract important keywords
    keywords = extract_keywords(transcript)

    # Generate MCQs
    mcqs = generate_mcqs(sentences, keywords)

    # Save MCQs to a file
    save_mcqs(mcqs, output_file)
    print(f"MCQs saved to {output_file}")

if __name__ == "__main__":
    main()
