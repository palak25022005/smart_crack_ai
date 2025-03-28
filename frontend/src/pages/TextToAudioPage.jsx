/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TextToAudioPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleTextToSpeech = () => {
    if (text.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <>
      <style>{`
      
  body {
  background: linear-gradient( rgb(164, 32, 140),rgb(9, 0, 10)); 
  
}
   .text-audio-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .text-input {
          width: 90%;
          padding: 10px;
          margin: 10px ;
          margin-right: 20px;
          border: 1px solid #6a0dad;
          border-radius: 5px;
          font-size: 16px;
        }

        .convert-button {
          background: #6a0dad;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .convert-button:hover {
          background: #4b0082;
          transform: scale(1.05);
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
      `}</style>

      
        <div className="text-audio-box">
        <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>
          <h2>Text to Audio Summarization</h2>
          <p>Convert your text into speech instantly.</p>
          <textarea
            className="text-input"
            rows="4"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="convert-button" onClick={handleTextToSpeech}>
            Convert to Audio
          </button>
      </div>
    </>
  );
};

export default TextToAudioPage;
*/

/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TextToAudioPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleTextToSpeech = () => {
    if (text.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <>
      <style>{`
      
  body {
  background: linear-gradient( rgb(164, 32, 140),rgb(9, 0, 10)); 
  
}
   .text-audio-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .text-input {
          width: 90%;
          padding: 10px;
          margin: 10px ;
          margin-right: 20px;
          border: 1px solid #6a0dad;
          border-radius: 5px;
          font-size: 16px;
        }

        .convert-button {
          background: #6a0dad;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .convert-button:hover {
          background: #4b0082;
          transform: scale(1.05);
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
      }</style>

      
        <div className="text-audio-box">
        <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>
          <h2>Text to Audio Summarization</h2>
          <p>Convert your text into speech instantly.</p>
          <textarea
            className="text-input"
            rows="4"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="convert-button" onClick={handleTextToSpeech}>
            Convert to Audio
          </button>
      </div>
    </>
  );
};

export default TextToAudioPage;
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TextToAudioPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarizeAndSpeak = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8001/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      const summarizedText = data.summary || "No summary available.";
      setSummary(summarizedText);

      // Read the full summarized text aloud
      const speech = new SpeechSynthesisUtterance(summarizedText);
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error("Error summarizing text:", error);
      setSummary("Failed to summarize text.");
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(rgb(164, 32, 140), rgb(9, 0, 10));
        }
        .text-audio-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .text-input {
          width: 90%;
          padding: 10px;
          margin: 10px;
          border: 1px solid #6a0dad;
          border-radius: 5px;
          font-size: 16px;
        }
        .convert-button {
          background: #6a0dad;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }
        .convert-button:hover {
          background: #4b0082;
          transform: scale(1.05);
        }
      `}</style>

      <div className="text-audio-box">
        <h2>Text Summarization & Audio</h2>
        <p>Summarize text and convert it to speech instantly.</p>

        <textarea
          className="text-input"
          rows="4"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="convert-button" onClick={handleSummarizeAndSpeak} disabled={loading}>
          {loading ? "Summarizing..." : "Summarize & Convert"}
        </button>

        {summary && (
          <div className="mt-4 p-3 border rounded bg-gray-100">
            <strong>Summary:</strong>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TextToAudioPage;