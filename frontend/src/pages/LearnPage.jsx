import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
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
        body, html {
          height: 100%;
          background: linear-gradient(rgb(97, 36, 159),rgb(18, 1, 30));
          margin: 0;
          font-family: Arial, sans-serif;
          display: flex;
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
       

        .learn-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 20px;
          margin-left: 260px;
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

        .learn-title{
          margin-left: 180px;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 0px;
          margin-left: 250px;
        }

        .learn-card {
          background: white;
          color: black;
          height: 50px;
          width: 280px;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: 0.3s;
        }

        .learn-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="sidebar">
        <h2>Subjects</h2>
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Select Subject ▼
          </button>
          <ul className="dropdown-menu">
            {Object.keys(lessons).map(subject => (
              <li key={subject} onClick={() => setSelectedSubject(subject)}>{subject}</li>
            ))}
          </ul>
        </div>
        {selectedSubject && (
          <ul className="lessons-list">
             {lessons[selectedSubject].map((lesson, index) => (
              <button key={index} className="lesson-button" onClick={() => navigate(`/lesson/${lesson}`)}>
                {lesson}
              </button>
            ))}
          </ul>
        )}
      </div>

      <div className="learn-container">
        <div className="navbar">
          <button className="nav-button">SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button active">Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>
        <h1 className="learn-title">Learn Page</h1>
        <div className="grid-container">
          <div className="learn-card" onClick={() => navigate("/videoRecommendationPage")}>Video Recommendation</div>
          <div className="learn-card" onClick={() => navigate("/MCQs")}>Practice MCQs</div>
          <div className="learn-card" onClick={() => navigate("/QuizAttemptPage")}>Quiz</div>
          <div className="learn-card" onClick={() => navigate("/Notes")}>Notes</div>
          <div className="learn-card" onClick={() => navigate("/weakPoints")}>Weak Points</div>
        </div>
      </div>
    </>
  );
};

export default LearnPage;