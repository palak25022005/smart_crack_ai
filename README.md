SmartCrackAI

Overview
SmartCrackAI is an AI-powered education platform designed to help students learn effectively.
Our system integrates Artificial Intelligence with a MERN (MongoDB, Express.js, React.js, Node.js) stack to provide an adaptive learning experience. 


 ⚙️ Setup and Installation
 
1. Clone the repository:
   
   git clone https://github.com/palak25022005/smart_crack_ai.git
   cd smart_crack_ai
   
2. Install dependencies:
   
   cd backend
   npm install
   
   cd frontend
   npm install

4. Installation command for python in backend folder
   
    pip install fastapi uvicorn mira-sdk pydantic transformers
   

5. make sure vite is installed in frontend and nodemon is installed in backend

6. Command to run frontend

 cd frontend 
 npm run dev

7. Command to run python files

   cd backend

   run these three commands in separate terminals

   uvicorn chatbot:app --host 0.0.0.0 --port 8000 --reload

   and

   uvicorn summarizer:app --host 0.0.0.0 --port 8001 --reload

   and

   uvicorn StressBuster:app --host 0.0.0.0 --port 8010 --reload


9. Command to run backend

    cd backend
    npm run dev

10. Visit the port provided by the frontend route in the terminal

    
