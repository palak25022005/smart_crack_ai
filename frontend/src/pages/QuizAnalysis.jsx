import React from "react";
import { useNavigate } from "react-router-dom";

const quizData = [
  { question: "Q1", time: 10, attempted: true, correct: true },
  { question: "Q2", time: 20, attempted: true, correct: false },
  { question: "Q3", time: 15, attempted: false, correct: false },
  { question: "Q4", time: 25, attempted: true, correct: true },
  { question: "Q5", time: 12, attempted: false, correct: false },
  { question: "Q6", time: 18, attempted: true, correct: false },
  { question: "Q7", time: 22, attempted: true, correct: true },
  { question: "Q8", time: 16, attempted: true, correct: false },
  { question: "Q9", time: 14, attempted: false, correct: false },
  { question: "Q10", time: 19, attempted: true, correct: true },
];

const QuizAnalysis = () => {
  const navigate = useNavigate();
  const totalQuestions = quizData.length;
  const attemptedQuestions = quizData.filter((q) => q.attempted).length;
  const correctAnswers = quizData.filter((q) => q.correct).length;
  const accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(1);

  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #2d0b45, #180322);
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
          margin-top: 40px;
          text-align: center;
        }
        .quiz-table {
          width: 80%;
          margin: 20px auto;
          border-collapse: collapse;
        }
        .quiz-table th, .quiz-table td {
          padding: 12px;
          border: 1px solid white;
        }
        .attempted { background: green; }
        .not-attempted { background: gray; }
        .correct { background: blue; }
        .incorrect { background: red; }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .action-button {
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          background: linear-gradient(to right, #b3b6ff, #e8c3fd);
          color: black;
        }
      `}</style>

<div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button active" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button active" onClick={() => navigate("/StressBuster")}>StressBuster</button>
 
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

      <div className="container">
        <h2>Quiz Performance Overview</h2>
        <table className="quiz-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Time (sec)</th>
              <th>Attempted</th>
              <th>Correct</th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((q, index) => (
              <tr key={index}>
                <td>{q.question}</td>
                <td>{q.time}</td>
                <td className={q.attempted ? "attempted" : "not-attempted"}>
                  {q.attempted ? "Yes" : "No"}
                </td>
                <td className={q.correct ? "correct" : "incorrect"}>
                  {q.correct ? "✔" : "✘"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="button-group">
          <button className="action-button">Accuracy: {accuracy}%</button>
          <button className="action-button">View Weak Points</button>
          <button className="action-button">Score: {correctAnswers} / {totalQuestions}</button>
        </div>
      </div>
    </div>
  );
};

export default QuizAnalysis;