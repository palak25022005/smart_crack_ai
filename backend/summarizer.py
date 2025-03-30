from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

app = FastAPI()

# Allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the text summarization model
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

@app.get("/")
def read_root():
    return {"message": "FastAPI Backend Running!"}

@app.post("/summarize")
async def summarize(data: dict):
    text = data.get("text", "").strip()

    if not text:
        raise HTTPException(status_code=400, detail="No text provided for summarization.")

    # If the text is short, return it directly
    if len(text.split()) < 20:
        return {"summary": text}

    # Generate summary
    summary = summarizer(text, max_length=100, min_length=20, do_sample=False)

    return {"summary": summary[0]["summary_text"]}