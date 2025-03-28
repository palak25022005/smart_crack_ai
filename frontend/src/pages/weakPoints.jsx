import React from "react";
import { useNavigate } from "react-router-dom";


const WeakPoints = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <style>{`
        .weakpoints-container {
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

        .weakpoints-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .weak-point {
          background: #6a0dad;
          color: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .weak-point:hover {
          background: #4b0082;
          transform: scale(1.05);
        }
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
      `}</style>

      <div className="weakpoints-container">
      <div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active">AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>
        <div className="weakpoints-box">
          <h2>Weak Points Analysis</h2>
          <p>Improve your weak areas by reviewing these topics:</p>

          <div className="weak-point">Physics - Rotational Motion</div>
          <div className="weak-point">Chemistry - Organic Reactions</div>
          <div className="weak-point">Mathematics - Integration</div>
          <div className="weak-point">Biology - Genetics</div>
        </div>
      </div>
    </>
  );
};

export default WeakPoints;