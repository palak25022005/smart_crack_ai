from fastapi import FastAPI, HTTPException
from mira_sdk import MiraClient, Flow
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


# Initialize FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔹 Allow requests from all origins for debugging
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Initialize Mira Client
client = MiraClient(config={"API_KEY": "sb-67a30454308623d3558fdee715c4f3ab"})

# Define request body structure
class ChatRequest(BaseModel):
    input: str

@app.post("/chatbot")
async def chatbot(request: ChatRequest):
    try:
        version = "0.0.1"
        input_data = {"input": {"input": request.input}}

        # Call Mira API
        flow_name = f"@satya/gpt-chat/{version}"
        result = client.flow.execute(flow_name, input_data)

        return {"response": result}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

