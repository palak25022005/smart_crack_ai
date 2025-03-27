import React from "react";

const Notes = () => {
  return (
      <div className="notes-box">
        <h2>Study Notes</h2>
        <p>Select a subject to view notes:</p>

        <div className="note-card">Physics Notes</div>
        <div className="note-card">Chemistry Notes</div>
        <div className="note-card">Mathematics Notes</div>
        <div className="note-card">Biology Notes</div>

      <style>{`
        html, body, #root {
          height: 100%;
          width: 100%;
          background: linear-gradient(rgb(23, 4, 27), #4b0082);
        }

        .notes-box {
          background: black;
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-left:200px;
          max-width: 800px;
          align: center;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 90%;
        }

        .note-card {
          background: #6a0dad;
          color: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .note-card:hover {
          background: #4b0082;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Notes;
