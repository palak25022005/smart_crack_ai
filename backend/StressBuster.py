from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StressRequest(BaseModel):
    stress_reason: str

# Predefined stress relief activities
stress_relief_tips = [
    "Take a deep breath and try a 5-minute guided meditation.",
    "Go for a short walk in nature to clear your mind.",
    "Listen to your favorite calming music or nature sounds.",
    "Write down three things you're grateful for today.",
    "Watch a funny video or movie to lighten your mood.",
    "Do some light stretching or a few yoga poses.",
    "Try progressive muscle relaxation: tense and relax each muscle group.",
    "Drink a cup of herbal tea like chamomile or green tea.",
    "Talk to a close friend or family member about what's on your mind.",
    "Read a book or immerse yourself in a different world for a while."
]

@app.post("/api/stress-buster")
async def stress_buster(data: StressRequest):
    try:
        # Pick a random stress relief activity
        suggestion = random.choice(stress_relief_tips)
        return {"response": suggestion}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error in Stress Buster API: {str(e)}")
