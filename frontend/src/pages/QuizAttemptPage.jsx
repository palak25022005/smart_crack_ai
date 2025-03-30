/*import React from "react";
import { useNavigate } from "react-router-dom";

const QuizAttemptPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Attempt</h1>

    
      <button
        onClick={() => navigate("/QuizAnalysis")}
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizAttemptPage;
*/

/*
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(rgb(110, 33, 146),rgb(11, 1, 16));
          color: white;
          overflow: hidden;
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

        .quiz-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
          height: 70%;
          margin-top: 60px;
          padding: 20px;
        }

        .question-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          width: 60%;
          font-size: 18px;
        }

        .question-box p {
          margin-bottom: 20px;
        }

        .question-box .options {
          display: flex;
          flex-direction: column;
        }

        .option {
          margin: 5px 0;
          padding: 10px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          cursor: pointer;
        }

        .option:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .sidebar {
          width: 200px;
          background: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }

        .question-status {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .status-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: black;
        }

        .answered { background: green; }
        .not-answered { background: white; }
        .wrong { background: red; }

        .controls {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .control-button {
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          width: 150px;
        }

        .time-left { background: red; color: white; }
        .skip { background: blue; color: white; }
        .save { background: green; color: white; }
        .submit { background: yellow; color: black; }

        .nav-arrows {
          position: absolute;
          bottom: 20px;
          display: flex;
          justify-content: space-between;
          width: 90%;
        }

        .arrow {
          font-size: 40px;
          cursor: pointer;
        }
      `}</style>

      <div className="navbar">
        <button className="nav-button" >SmartCrack AI</button>
        <button className="nav-button" onClick={() => navigate("/")}>StudentDashboard</button>
        <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button active" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>

        <div className="quiz-container">
          
          <div className="sidebar">
            <button className="control-button">Q Data</button>
            <div className="question-status">
              <div className="status-circle answered">1</div>
              <div className="status-circle wrong">2</div>
              <div className="status-circle answered">3</div>
              <div className="status-circle answered">4</div>
              <div className="status-circle answered">5</div>
              <div className="status-circle not-answered">6</div>
              <div className="status-circle answered">7</div>
              <div className="status-circle not-answered">8</div>
              <div className="status-circle wrong">9</div>
            </div>
            <button className="control-button">Test Status</button>
          </div>

          
          <div className="question-box">
            <p>
              A ball is projected from the ground with an initial speed of u at an angle θ 
              with the horizontal. The time of flight of the projectile is T. At what time t 
              (from launch) will the velocity of the projectile be perpendicular to its 
              initial velocity?
            </p>
            <div className="options">
              <div className="option">(A) T/2</div>
              <div className="option">(B) T/4</div>
              <div className="option">(C) 3T/4</div>
              <div className="option">(D) T/3</div>
            </div>
          </div>

          
          <div className="controls">
            <button className="control-button time-left">Time Left<br/>164 Minutes: 12 sec</button>
            <button className="control-button skip">Skip</button>
            <button className="control-button save">Save</button>
            <button className="control-button submit" onClick={() => navigate("/QuizAnalysis")}>Submit Quiz</button>
          </div>
        </div>

        
        <div className="nav-arrows">
          <div className="arrow">⬅</div>
          <div className="arrow">➡</div>
        </div>
    </>
  );
};

export default QuizPage;

*/
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(rgb(110, 33, 146),rgb(11, 1, 16));
          color: white;
          overflow: hidden;
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

        .quiz-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
          height: 70%;
          margin-top: 60px;
          padding: 20px;
        }

        .question-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          width: 60%;
          font-size: 18px;
        }

        .question-box p {
          margin-bottom: 20px;
        }

        .question-box .options {
          display: flex;
          flex-direction: column;
        }

        .option {
          margin: 5px 0;
          padding: 10px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          cursor: pointer;
        }

        .option:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .sidebar {
          width: 200px;
          background: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }

        .question-status {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .status-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: black;
        }

        .answered { background: green; }
        .not-answered { background: white; }
        .wrong { background: red; }

        .controls {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .control-button {
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          width: 150px;
        }

        .time-left { background: red; color: white; }
        .skip { background: blue; color: white; }
        .save { background: green; color: white; }
        .submit { background: yellow; color: black; }

        .nav-arrows {
          position: absolute;
          bottom: 20px;
          display: flex;
          justify-content: space-between;
          width: 90%;
        }

        .arrow {
          font-size: 40px;
          cursor: pointer;
        }
      `}</style>

      <div className="navbar">
        <button className="nav-button" onClick={() => navigate("/")}>SmartCrack AI</button>
        <button className="nav-button" onClick={() => navigate("/Dashboard")}>StudentDashboard</button>
        <button className="nav-button" onClick={() => navigate("/Learn")}>Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button active" onClick={() => navigate("/AiQuiz")}>AiQuiz</button>
        <button className="nav-button active" onClick={() => navigate("/StressBuster")}>StressBuster</button>
 
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>

        <div className="quiz-container">
          {/* Sidebar with question status */}
          <div className="sidebar">
            <button className="control-button">Q Data</button>
            <div className="question-status">
              <div className="status-circle answered">1</div>
              <div className="status-circle wrong">2</div>
              <div className="status-circle answered">3</div>
              <div className="status-circle answered">4</div>
              <div className="status-circle answered">5</div>
              <div className="status-circle not-answered">6</div>
              <div className="status-circle answered">7</div>
              <div className="status-circle not-answered">8</div>
              <div className="status-circle wrong">9</div>
            </div>
            <button className="control-button">Test Status</button>
          </div>

          {/* Question and Options */}
          <div className="question-box">
            <p>
              A ball is projected from the ground with an initial speed of u at an angle θ 
              with the horizontal. The time of flight of the projectile is T. At what time t 
              (from launch) will the velocity of the projectile be perpendicular to its 
              initial velocity?
            </p>
            <div className="options">
              <div className="option">(A) T/2</div>
              <div className="option">(B) T/4</div>
              <div className="option">(C) 3T/4</div>
              <div className="option">(D) T/3</div>
            </div>
          </div>

          {/* Timer and Buttons */}
          <div className="controls">
            <button className="control-button time-left">Time Left<br/>164 Minutes: 12 sec</button>
            <button className="control-button skip">Skip</button>
            <button className="control-button save">Save</button>
            <button className="control-button submit">Submit Quiz</button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="nav-arrows">
          <div className="arrow">⬅</div>
          <div className="arrow">➡</div>
        </div>
    </>
  );
};

export default QuizPage;