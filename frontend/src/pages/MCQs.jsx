import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MCQPage = () => {
  const navigate = useNavigate();
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [selectedSubject, setSelectedSubject] = useState(null);
 
   const lessons = {
     Physics: ["Kinematics", "Laws of Motion", "Thermodynamics"],
     Chemistry: ["Organic Chemistry", "Periodic Table", "Chemical Reactions"],
     Maths: ["Algebra", "Calculus", "Geometry"]
   };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(rgb(99, 33, 128),rgb(21, 2, 30));
          color: white;
          overflow: hidden;
        }


        .sidebar {
          width: 250px;
          background: linear-gradient(rgb(97, 36, 159),rgb(18, 1, 30));
          color: white;
          height: 100vh;
          padding: 20px;
          position: fixed;
          left: 0;
          top: 0;
        }

        .sidebar h2 {
          text-align: center;
        }

        .dropdown {
          margin-top: 20px;
        }

        .dropdown-button {
          background:rgb(0, 0, 0);
          color: white;
          padding: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .dropdown-menu {
          display: ${isDropdownOpen ? "block" : "none"};
          background: black;
          color: white;
          list-style: none;
          padding: 10px;
          border-radius: 5px;
          margin-top: 5px;
        }

        .dropdown-menu li {
          padding: 5px;
          cursor: pointer;
        }

        .dropdown-menu li:hover {
          background: #ddd;
        }

        .lesson-button {
          background: black;
          color: white;
          padding: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          margin-bottom: 5px;
        }

        .lesson-button:hover {
          background: #ddd;
        }
       

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
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
        }

        .card {
          background: #3d0b4a;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0px 0px 20px #a260ff;
          text-align: center;
          width: 500px;
        }

        .options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .option {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .checkbox {
          margin-right: 10px;
        }

        .button {
          background: white;
          color: black;
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          margin: 10px;
          cursor: pointer;
        }

        .navigation-arrow {
          position: absolute;
          bottom: 20px;
          cursor: pointer;
          font-size: 48px; /* Big arrows */
          font-weight: bold;
          padding: 10px;
          user-select: none;
        }

        .left-arrow {
          left: 400px;
        }

        .right-arrow {
          right: 100px;
        }
      `}</style>

      <div className="navbar">
        <button className="nav-button" onClick={() => navigate("/")}>Home</button>
        <button className="nav-button" onClick={() => navigate("/Dashboard")}>Dashboard</button>
        <button className="nav-button active">Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>

      <div className="sidebar">
        <h2>Subjects</h2>
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Select Subject ▼
          </button>
          <ul className="dropdown-menu">
            {Object.keys(lessons).map((subject) => (
              <li key={subject} onClick={() => setSelectedSubject(subject)}>
                {subject}
              </li>
            ))}
          </ul>
        </div>
        {selectedSubject && (
          <ul className="lessons-list">
            {lessons[selectedSubject].map((lesson, index) => (
              <button
                key={index}
                className="lesson-button"
                onClick={() => navigate(`/lesson/${lesson}`)}
              >
                {lesson}
              </button>
            ))}
          </ul>
        )}
      </div>

      <div className="container">
        <div className="card">
          <p>Que. As light from a star spreads out and weakens, do gaps form between the photons?</p>
          <div className="options">
            <label className="option">
              <input type="checkbox" className="checkbox" /> Option 1
            </label>
            <label className="option">
              <input type="checkbox" className="checkbox" /> Option 2
            </label>
            <label className="option">
              <input type="checkbox" className="checkbox" /> Option 3
            </label>
            <label className="option">
              <input type="checkbox" className="checkbox" /> Option 4
            </label>
          </div>
          <div>
            <button className="button">Submit Answer</button>
            <button className="button">Skip</button>
          </div>
        </div>
        <div className="navigation-arrow left-arrow">⬅</div>
        <div className="navigation-arrow right-arrow">➡</div>
      </div>
    </>
  );
};

export default MCQPage;
