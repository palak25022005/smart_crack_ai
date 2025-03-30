/*import React, { useState } from "react";
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

*/

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
          background: linear-gradient(135deg, rgb(97, 36, 159), rgb(18, 1, 30));
          width: 100%;
          font-family: 'Poppins', Arial, sans-serif;
          display: flex;
          color: white;
        }

        .sidebar {
          width: 280px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          color: white;
          height: 100vh;
          padding: 30px 20px;
          position: fixed;
          left: 0;
          margin-top: -10;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .sidebar h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 15px;
        }

        .dropdown {
          margin-top: 20px;
        }

        .dropdown-button {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 14px 18px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          font-weight: 600;
          letter-spacing: 0.5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .dropdown-button:hover {
          background: rgba(106, 13, 173, 0.5);
          box-shadow: 0 6px 20px rgba(106, 13, 173, 0.4);
          transform: translateY(-2px);
        }

        .dropdown-menu {
          display: ${isDropdownOpen ? "block" : "none"};
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          color: white;
          list-style: none;
          padding: 10px;
          border-radius: 8px;
          margin-top: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, a0, 0.4);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-menu li {
          padding: 10px 12px;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-bottom: 5px;
        }

        .dropdown-menu li:hover {
          background: rgba(106, 13, 173, 0.6);
          transform: translateX(5px);
        }

        .lessons-list {
          padding: 0;
          margin-top: 20px;
          list-style: none;
        }

        .lesson-button {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 12px 16px;
          width: 100%;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          margin-bottom: 10px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          letter-spacing: 0.5px;
          text-align: left;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .lesson-button:hover {
          background: rgba(106, 13, 173, 0.6);
          transform: translateY(-2px) translateX(5px);
          box-shadow: 0 6px 15px rgba(106, 13, 173, 0.4);
        }
       
        .learn-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 30px;
          margin-left: 280px;
          width: 100%;
        }
.navbar {
          display: flex;
          justify-content: space-around;
          background-color: #23004d;
          padding: 15px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
        }

        .nav-button {
          background: linear-gradient(to right, #6a0dad, #4b0082);
          color: white;
          padding: 12px 25px;
          border-radius: 10px;
          border: 1px solid white;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          transition: 0.3s;
        }

        .nav-button:hover, .nav-button.active {
          background: #2e005b;
          transform: scale(1.05);
        }
        .learn-title {
          font-size: 36px;
          font-weight: 700;
          margin-left: 100px;
          margin-top: 100px;
          margin-bottom: 40px;
          text-align: center;
          width: 100%;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .learn-title:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #6a0dad, transparent);
          border-radius: 2px;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 150px;
          padding-left:250px;
          margin: 30px auto;
          width: 80%;
          max-width: 900px;
          margin-left: 200px;
        }

        .learn-card {
          background: rgba(255, 255, 255, 0.9);
          color: #23004d;
          min-height: 120px;
          width: 100%;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          font-weight: bold;
          font-size: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .learn-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(106, 13, 173, 0.1), rgba(255, 255, 255, 0));
          z-index: -1;
        }

        .learn-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(106, 13, 173, 0.3);
        }

        .learn-card:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #6a0dad, #8a25d9);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .learn-card:hover:after {
          transform: scaleX(1);
        }

        @media (max-width: 1200px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 240px;
          }
          
          .learn-container {
            margin-left: 240px;
            width: calc(100% - 240px);
          }
          
          .navbar {
            flex-wrap: wrap;
          }
          
          .nav-button {
            margin: 5px;
            padding: 10px 15px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="sidebar">
        <h2>Subjects</h2>
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Select Subject <span>▼</span>
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

        <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button active">Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button active" onClick={() => navigate("/StressBuster")}>StressBuster</button>
 
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>
        <h1 className="learn-title">Learn Page</h1>
        <div className="grid-container " >
          <div className="learn-card" onClick={() => navigate("/videoRecommendationPage")}>Video Recommendation</div>
          <div className="learn-card" onClick={() => navigate("/MCQs")}>Practice MCQs</div>
          <div className="learn-card" onClick={() => navigate("/Notes")}>References</div>
          <div className="learn-card" onClick={() => navigate("/weakPoints")}>Weak Points</div>
        </div>
      
    </>
  );
};

export default LearnPage;

