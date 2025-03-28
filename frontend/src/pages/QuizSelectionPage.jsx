import React, { useState } from "react";

const QuizSelectionPage = () => {
  const [selectedLessons, setSelectedLessons] = useState([]);

  const toggleSelection = (lesson) => {
    setSelectedLessons((prev) =>
      prev.includes(lesson)
        ? prev.filter((item) => item !== lesson) // Deselect if already selected
        : [...prev, lesson] // Select if not selected
    );
  };

  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(rgb(92, 23, 104),rgb(0, 0, 0));
          color: white;
          text-align: center;
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
        .container {
          display: flex;
          justify-content: space-around;
          padding: 20px;
          margin-top: 50px;
        }
        .section {
          width: 30%;
        }
        .lesson-button {
          background: #800080;
          color: white;
          border: none;
          padding: 10px;
          margin: 5px;
          width: 80%;
          border-radius: 10px;
          cursor: pointer;
        }
        .lesson-button:hover {
          background: #a020f0;
        }
        .selected {
          background: #32cd32 !important; /* Green color for selected lessons */
          color: black;
          font-weight: bold;
        }
        .section-header {
          background: #ff69b4;
          padding: 10px;
          border-radius: 10px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 10px;
        }
        .attempt-quiz-button {
          background: #ff4500;
          padding: 15px;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
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

      <div className="container">
        <div className="section">
          <div className="section-header">Physics Lessons</div>
          {[...Array(8)].map((_, i) => {
            const lesson = `Physics Lesson ${i + 1}`;
            return (
              <button
                key={i}
                className={`lesson-button ${
                  selectedLessons.includes(lesson) ? "selected" : ""
                }`}
                onClick={() => toggleSelection(lesson)}
              >
                Lesson {i + 1}
              </button>
            );
          })}
        </div>

        <div className="section">
          <div className="section-header">Chemistry Lessons</div>
          {[...Array(8)].map((_, i) => {
            const lesson = `Chemistry Lesson ${i + 1}`;
            return (
              <button
                key={i}
                className={`lesson-button ${
                  selectedLessons.includes(lesson) ? "selected" : ""
                }`}
                onClick={() => toggleSelection(lesson)}
              >
                Lesson {i + 1}
              </button>
            );
          })}
        </div>

        <div className="section">
          <div className="section-header">Maths Lessons</div>
          {[...Array(8)].map((_, i) => {
            const lesson = `Maths Lesson ${i + 1}`;
            return (
              <button
                key={i}
                className={`lesson-button ${
                  selectedLessons.includes(lesson) ? "selected" : ""
                }`}
                onClick={() => toggleSelection(lesson)}
              >
                Lesson {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      <button className="attempt-quiz-button">Attempt Quiz</button>
    </div>
  );
};

export default QuizSelectionPage;
