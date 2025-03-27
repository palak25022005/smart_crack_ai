import React from "react";

const Notes = () => {
  return (
    <>
      <style>{`
        .notes-container {
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

        .notes-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

      <div className="notes-container">
        <div className="notes-box">
          <h2>Study Notes</h2>
          <p>Select a subject to view notes:</p>

          <div className="note-card">Physics Notes</div>
          <div className="note-card">Chemistry Notes</div>
          <div className="note-card">Mathematics Notes</div>
          <div className="note-card">Biology Notes</div>
        </div>
      </div>
    </>
  );
};

export default Notes;
