import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TextToAudioPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const speechSynthesisInstance = window.speechSynthesis;

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
      speechSynthesisInstance.speak(speech);
    } catch (error) {
      console.error("Error summarizing text:", error);
      setSummary("Failed to summarize text.");
    }

    setLoading(false);
  };

  const handleStopSpeech = () => {
    speechSynthesisInstance.cancel();
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
        .convert-button, .stop-button {
          background: #6a0dad;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
          margin: 5px;
        }
        .convert-button:hover, .stop-button:hover {
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

        <button className="stop-button" onClick={handleStopSpeech}>
          Stop Audio
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
