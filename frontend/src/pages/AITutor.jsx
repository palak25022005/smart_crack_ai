/*import React from 'react'

const AITutor = () => {
  return (
    <div>
      aitutor
    </div>
  )
}

export default AITutor
*/

import React from "react";
import { useNavigate } from "react-router-dom";

const AITutor = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Full Page Background */
        body, html {
          height: 100%;
          background: linear-gradient(to bottom,rgb(101, 38, 148),  rgb(33, 4, 54));
          margin: 0;
          font-family: Arial, sans-serif; 
          color: white;
        }
        /* Navbar */
            .navbar {
          display: flex;
          justify-content: space-around; /* Spread evenly */
          background-color: #23004d;
          padding: 20px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
      }

        .nav-button {
    background: linear-gradient(to right, #6a0dad, #4b0082);
    color: white;
    padding: 15px 30px; /* Increased padding */
    border-radius: 10px; /* Slightly rounded */
      border: 1px solid white;
  border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem; /* Slightly larger text */
    transition: 0.3s;
  }

       .nav-button:hover {
    background: #2e005b;
    transform: scale(1.05);
  }
        .nav-button.active {
          background: #2e005b;
        }
        /* AI Tutor Section */
        .ai-tutor-title {
          font-size: 28px;
          font-weight: bold;
          margin-top:80px;
        }

        .chat-container {
          background: white;
          color: black;
          width: 800px;
          padding: 40px;
          border-radius: 40px;
          text-align: center;
          font-weight: bold;
          display: flex;
          flex-direction: column;
    
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .chat-box {
          width: 100%;
          height: 300px;
          background-color:rgb(241, 239, 239);
          border-radius: 20px;
          padding: 10px;
          overflow-y: auto;
          margin-bottom: 10px;
        }

        .input-box {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ccc;
          margin-top: 10px;
        }

        .send-button {
          background: #6a0dad;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: bold;
        }

        .send-button:hover {
          background: #4b0082;
        }
      `}</style>

        {/* Navbar */}
        <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active">AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

        {/* AI Tutor Section */}
        <h1 className="ai-tutor-title">AI Tutor</h1>

        <div className="chat-container">
          <div className="chat-box">
            {/* Chat messages will be displayed here */}
          </div>
          <input type="text" className="input-box" placeholder="Ask AI Tutor..." />
          <button className="send-button">Send</button>
        </div>
      
    </>
  );
};

export default AITutor;