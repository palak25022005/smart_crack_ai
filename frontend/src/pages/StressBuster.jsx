import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StressBuster = () => {
  const [stressReason, setStressReason] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAsk = async () => {
    if (!stressReason.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8010/api/stress-buster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stress_reason: stressReason }),
      });

      const data = await res.json();
      const newEntry = { question: stressReason, answer: data.response };

      setChatHistory((prev) => [...prev, newEntry]);
    } catch (error) {
      console.error("Error fetching stress relief response:", error);
      setChatHistory((prev) => [
        ...prev,
        { question: stressReason, answer: "Failed to get response." },
      ]);
    }

    setLoading(false);
    setStressReason("");
  };

  return (
    <>
      <style>{`
        body, html {
          height: 100%;
          background: linear-gradient(to bottom, rgb(101, 38, 148), rgb(33, 4, 54));
          margin: 0;
          font-family: Arial, sans-serif; 
          color: white;
        }
        .navbar {
          display: flex;
          justify-content: space-around;
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
          padding: 15px 30px;
          border-radius: 10px;
          border: 1px solid white;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.1rem;
          transition: 0.3s;
        }
        .nav-button:hover {
          background: #2e005b;
          transform: scale(1.05);
        }
        .nav-button.active {
          background: #2e005b;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }
        .stress-buster-title {
          font-size: 28px;
          font-weight: bold;
          margin-top: 80px;
          text-align: center;
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
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          margin: 50px auto;
        }
        .chat-box {
          width: 100%;
          height: 300px;
          background-color: rgb(241, 239, 239);
          border-radius: 20px;
          padding: 10px;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .input-container {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 10px;
          padding: 5px 10px;
          width: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .input-box {
          flex: 1;
          border: none;
          padding: 10px;
          border-radius: 10px;
          font-size: 16px;
          outline: none;
        }
        .send-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #4b0082;
          font-size: 18px;
          font-weight: bold;
          padding: 10px 15px;
          border-radius: 10px;
          transition: background 0.3s;
        }
        .send-button:hover {
          background: #e5e5e5;
        }
      `}</style>

      {/* Navbar */}
      <div className="navbar">
        <button className="nav-button">SmartCrack AI</button>
        <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
        <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
        <button className="nav-button active">StressBuster</button>
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>

      {/* Stress Buster Section */}
      <h1 className="stress-buster-title">Stress Buster</h1>
      <div className="chat-container">
        <div className="chat-box">
          {chatHistory.length === 0 ? (
            <p className="text-gray-500">No questions asked yet.</p>
          ) : (
            chatHistory.map((entry, index) => (
              <div key={index}>
                <p className="text-blue-600">You: {entry.question}</p>
                <p>Stress Relief Tip: {entry.answer}</p>
              </div>
            ))
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={stressReason}
            onChange={(e) => setStressReason(e.target.value)}
            placeholder="What is stressing you out?"
            className="input-box"
          />
          <button className="send-button" onClick={handleAsk} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default StressBuster;