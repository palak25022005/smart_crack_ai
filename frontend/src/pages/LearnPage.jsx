import React from "react";
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Full Screen Background */
        body, html {
          height: 100%;
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .learn-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 20px;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: center;
          gap: 15px;
          background-color: #23004d;
          padding: 15px;
          width: 100%;
          border-radius: 10px;
          position: fixed;
          top: 0;
          left: 0;
        }

        .nav-button {
          background: linear-gradient(to right, #6a0dad, #4b0082);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }

        /* Heading */
        .learn-title {
          font-size: 28px;
          font-weight: bold;
          margin-top: 80px;
        }

        /* Grid Buttons */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .learn-card {
          background: white;
          color: black;
          width: 280px;
          padding: 20px;
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

        .learn-card img {
          width: 100px;
          margin-bottom: 10px;
        }

        .learn-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="learn-container">
        {/* Navbar */}
        <div className="navbar">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/Dashboard")}>Dashboard</button>
          <button className="nav-button active">Learn</button>
          <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

        {/* Learn Page Title */}
        <h1 className="learn-title">Learn Page</h1>

        {/* Feature Cards */}
        <div className="grid-container">
          <div className="learn-card" onClick={() => navigate("/videoRecommendationPage")}>
            <img src="https://img.icons8.com/external-flat-icons-pause-08/64/000000/external-video-video-flat-icons-pause-08.png" alt="Video" />
            Video Recommendation
          </div>

          <div className="learn-card" onClick={() => navigate("/MCQs")}>
            <img src="https://img.icons8.com/external-flat-juicy-fish/64/000000/external-exam-online-learning-flat-flat-juicy-fish.png" alt="MCQs" />
            Practice MCQs
          </div>

          <div className="learn-card" onClick={() => navigate("/QuizAttemptPage")}>
            <img src="https://img.icons8.com/external-flat-juicy-fish/64/000000/external-quiz-education-and-learning-flat-flat-juicy-fish.png" alt="Quiz" />
            Quiz
          </div>

          <div className="learn-card" onClick={() => navigate("/Notes")}>
            <img src="https://img.icons8.com/external-flat-juicy-fish/64/000000/external-notes-education-and-learning-flat-flat-juicy-fish.png" alt="Notes" />
            Notes
          </div>

          <div className="learn-card" onClick={() => navigate("/weakPoints")}>
            <img src="https://img.icons8.com/external-flat-juicy-fish/64/000000/external-warning-business-and-finance-flat-flat-juicy-fish.png" alt="Weak Points" />
            Weak Points
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
