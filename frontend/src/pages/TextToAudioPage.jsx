import React, { useState } from "react";

const TextToAudioPage = () => {
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
        .text-audio-container {
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .text-audio-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .text-input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
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

      <div className="text-audio-container">
        <div className="text-audio-box">
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
      </div>
    </>
  );
};

export default TextToAudioPage;
