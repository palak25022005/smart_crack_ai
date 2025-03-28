/*import React from 'react'

const AITutor = () => {
  return (
    <div>
      aitutor
    </div>
  )
}

export default AITutor

import React from "react";
import { useNavigate } from "react-router-dom";

const AITutor = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body, html {
          height: 100%;
          background: linear-gradient(to bottom,rgb(101, 38, 148),  rgb(33, 4, 54));
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
  border-radius: 10px;
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
        }
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

        
        <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active">AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

        
        <h1 className="ai-tutor-title">AI Tutor</h1>

        <div className="chat-container">
          <div className="chat-box">
           
          </div>
          <input type="text" className="input-box" placeholder="Ask AI Tutor..." />
          <button className="send-button">Send</button>
        </div>
      
    </>
  );
};

export default AITutor;
------------------------
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const AITutor = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: question }),
      });

      const data = await res.json();
      console.log("Chatbot Response:", data);  // ✅ Debugging log
      setResponse(data.response || { result: "No response received." }); // ✅ Ensure response is an object with 'result'
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setResponse({ result: 'Failed to get response.' }); // ✅ Ensure fallback is also an object
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">AI Tutor Chatbot</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white p-2 rounded w-full"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      <div className="mt-4 p-3 border rounded bg-gray-100">
        <strong>Response:</strong>
        <p>{response?.result || "No response received."}</p> 
      </div>
    </div>
  );
};

export default AITutor;
-------------------------
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const AITutor = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAsk = async () => {
    if (!question.trim()) return;  // Prevent empty requests
  
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: question }),
      });
  
      const data = await res.json();
      setResponse(data.response || { result: "No response received." });
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setResponse({ result: "Failed to get response." });
    }
    
    setLoading(false);
    setQuestion("");  // ✅ Clears the input field after submitting
  };
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">AI Tutor Chatbot</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white p-2 rounded w-full"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      <div className="mt-4 p-3 border rounded bg-gray-100">
        <strong>Response:</strong>
        <p>{response?.result || "No response received."}</p> 
      </div>
    </div>
  );
};

export default AITutor;
*/
import React, { useState } from "react";

const AITutor = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Store question-answer pairs
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return; // Prevent empty requests

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: question }),
      });

      const data = await res.json();
      const newEntry = {
        question,
        answer: data.response?.result || "No response received.",
      };

      setChatHistory((prev) => [...prev, newEntry]); // Add new Q&A to history
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setChatHistory((prev) => [
        ...prev,
        { question, answer: "Failed to get response." },
      ]);
    }

    setLoading(false);
    setQuestion(""); // ✅ Clears input after asking
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        AI Tutor Chatbot
      </h2>

      {/* Input Field */}
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Ask AI Button */}
      <button
        onClick={handleAsk}
        className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg mt-3 hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {/* Chat History */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg border">
        <strong className="block text-gray-700 mb-2">Chat History:</strong>
        {chatHistory.length === 0 ? (
          <p className="text-gray-500">No questions asked yet.</p>
        ) : (
          <ul className="space-y-4">
            {chatHistory.map((entry, index) => (
              <li key={index} className="p-3 bg-white rounded-lg shadow">
                <p className="font-semibold text-blue-600">Q: {entry.question}</p>
                <p className="text-gray-800">A: {entry.answer}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AITutor;
