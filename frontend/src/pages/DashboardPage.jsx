/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");

  const lessons = {
    Physics: ["Kinematics", "Newton's Laws", "Thermodynamics"],
    Chemistry: ["Organic Chemistry", "Chemical Reactions", "Periodic Table"],
    Maths: ["Algebra", "Calculus", "Probability"],
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial;
        }

        body, html {
          height: 100%;
          background: linear-gradient(to bottom, #2e005b, #4b0082);
        }

        .dashboard-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 70px;
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

        .dropdown-container {
          margin-top: 80px;
          text-align: center;
        }

        select {
          padding: 10px;
          font-size: 1rem;
          margin: 10px;
          border-radius: 5px;
          border: none;
          width: 300px;        }

        .lesson-button {
          margin-top: 20px;
          padding: 12px 25px;
          font-size: 1.2rem;
          border-radius: 10px;
          background: #ffd700;
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .lesson-button:hover {
          background: #e6c200;
        }
      `}</style>

      <div className="dashboard-container">
        
        <div className="navbar">
          <button className="nav-button" onClick={() => navigate("/")}>SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AI Tutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AI Quiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

        
        <div className="dropdown-container">
          <h2>Select Subject</h2>
          <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="">-- Select Subject --</option>
            {Object.keys(lessons).map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>

          {selectedSubject && (
            <>
              <h2>Select Lesson</h2>
              <select value={selectedLesson} onChange={(e) => setSelectedLesson(e.target.value)}>
                <option value="">-- Select Lesson --</option>
                {lessons[selectedSubject].map((lesson) => (
                  <option key={lesson} value={lesson}>{lesson}</option>
                ))}
              </select>
            </>
          )}

          {selectedLesson && (
            <button className="lesson-button" onClick={() => navigate(`/lesson/${selectedSubject}/${selectedLesson}`)}>
              Go to Lesson
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
*/
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
       <style>{`
        /* General Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
         font-family:Arial;
        }

        body, html {
          height: 100%;
          background: linear-gradient(to bottom, #2e005b, #4b0082);
        }

        .dashboard-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 70px;
        }

        /* Navbar */
          .navbar {
          display: flex;
          justify-content: space-around; /* Spread evenly */
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
    padding: 15px 30px; /* Increased padding */
    border-radius: 10px; /* Slightly rounded */
      border: 1px solid white;
  border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem; /* Slightly larger text */
    transition: 0.3s;
  }

       .nav-button:hover {
    background: #2e005b;
    transform: scale(1.05);
  }
        .nav-button.active {
          background: #2e005b;
        }

        /* Welcome Section */
        .welcome-section {
          text-align: center;
          margin-top: 20px;

        }

        .progress-bar-container {
          width: 80%;
          background-color: #4b0082;
          height: 12px;
          border-radius: 6px;
          margin: 10px auto;
        }

        .progress-bar {
          width: 80%;
          height: 100%;
          background-color: #ffd700;
          border-radius: 6px;
        }

        /* Cards Section */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px;
          margin-top: 60px;
        }

        .card {
          background: white;
          color: black;
          width: 500px;
          padding: 40px;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s;
        }

        .card img {
          width: 100px;
          margin-bottom: 10px;
        }

        .card:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="dashboard-container">
        {/* Navbar */}
        <div className="navbar">
          <button className="nav-button active" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>StudentDashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button active" onClick={() => navigate("/StressBuster")}>StressBuster</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

        {/* Welcome and Progress Bar */}
        <div className="welcome-section">
          <h2>Welcome Palak</h2>
          <p><b>Progress Bar: 80% complete</b></p>
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="cards-container">
          <div className="card" onClick={() => navigate("/LearnPage")}>
            
            Continue Learning
          </div>

          <div className="card" onClick={() => navigate("/AITutor")}>
            
            Ask AI Tutor
          </div>

          <div className="card" onClick={() => navigate("/QuizSelectionPage")}>
            
            AI Quiz
          </div>
          
          <div className="card" onClick={() => navigate("/TextToAudioPage")}>
            
            Text to Audio Summarization
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;