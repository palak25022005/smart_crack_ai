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
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .ai-tutor-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 20px;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: center;
          gap: 15px;
          background-color: #23004d;
          padding: 15px;
          width: 100%;
          border-radius: 10px;
          position: fixed;
          top: 0;
          left: 0;
        }

        .nav-button {
          background: linear-gradient(to right, #6a0dad, #4b0082);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }

        /* AI Tutor Section */
        .ai-tutor-title {
          font-size: 28px;
          font-weight: bold;
          margin-top: 80px;
        }

        .chat-container {
          background: white;
          color: black;
          width: 80%;
          max-width: 600px;
          padding: 20px;
          border-radius: 20px;
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
          background-color: #f9f9f9;
          border-radius: 10px;
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

      <div className="ai-tutor-container">
        {/* Navbar */}
        <div className="navbar">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/Dashboard")}>Dashboard</button>
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
      </div>
    </>
  );
};

export default AITutor;
