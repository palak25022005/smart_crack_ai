import React from "react";
import { useNavigate } from "react-router-dom";

const QuizSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .quiz-container {
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

        .quiz-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .quiz-heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .quiz-text {
          font-size: 16px;
          margin-bottom: 15px;
        }

        .quiz-button {
          background: #6a0dad;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .quiz-button:hover {
          background: #4b0082;
          transform: scale(1.05);
        }
      `}</style>

      <div className="quiz-container">
        <div className="quiz-box">
          <h2 className="quiz-heading">AI Quiz</h2>
          <p className="quiz-text">
            Test your knowledge with AI-powered quizzes.
          </p>
          <button className="quiz-button" onClick={() => navigate("/QuizAttemptPage")}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizSelectionPage;
