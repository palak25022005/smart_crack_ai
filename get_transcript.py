#e_qKdRzAeBg
#_lLwOvc0j70
#QWh8RACSqxc
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound

# Replace with your YouTube video ID
video_id = "KZnLd_2tVB8"  # Example video ID

try:
    # Attempt to get the English transcript
    print("Trying to fetch English transcript...")
    transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['en'])

except NoTranscriptFound:
    print("English transcript not found. Trying auto-generated transcript...")

    try:
        # List available transcripts
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        
        # Check if any auto-generated transcript exists
        auto_transcript = None
        for transcript in transcript_list:
            if transcript.is_generated:
                auto_transcript = transcript.translate('en').fetch()
                break

        if auto_transcript:
            print(f"Found auto-generated transcript. Translating to English...")
            transcript = auto_transcript
        else:
            print("No auto-generated transcript found.")
            transcript = None

    except Exception as e:
        print("Error fetching auto-generated transcript:", e)
        transcript = None

except TranscriptsDisabled:
    print("Transcripts are disabled for this video.")
    transcript = None

# Save transcript if available
if transcript:
    with open("transcript.txt", "w", encoding="utf-8") as file:
        for entry in transcript:
            if isinstance(entry, dict):  # ✅ Default transcript (list of dicts)
                file.write(entry['text'] + "\n")
            else:  # ✅ Translated transcript (object with .text)
                file.write(entry.text + "\n")

    print("Transcript saved successfully as transcript.txt")
else:
    print("Could not retrieve the transcript.")
