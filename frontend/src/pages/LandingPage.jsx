import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(rgb(82, 33, 125),rgb(19, 2, 30));
            color: white;
            text-align: center;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            padding: 20px;
          }
          .title {
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
            margin-bottom: 10px;
          }
          .subtitle {
            font-size: 1.2rem;
            max-width: 600px;
            margin-bottom: 20px;
            color: #ddd;
            margin-left: 160px;
          }
          .cards {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
          }
          .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            width: 250px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .card h2 {
            margin-bottom: 10px;
          }
          .buttons {
            display: flex;
            gap: 20px;
          }
          .button {
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          .button-login {
            background: #007bff;
            color: white;
          }
          .button-login:hover {
            background: #0056b3;
            transform: scale(1.1);
          }
          .button-signup {
            background: #28a745;
            color: white;
          }
          .button-signup:hover {
            background: #1e7e34;
            transform: scale(1.1);
          }
          .mascot {
            position: absolute;
            bottom: 20px;
            right: 20px;
            height: 60px;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 30px;
          }
          .mascot img {
            width: 40px;
            margin-right: 10px;
          }
        `}
      </style>

      {/* Main Content */}
      
        <h1 className="title"> Welcome to Smart Crack AI</h1>
        <p className="subtitle">
          AI-powered EdTech for personalized learning—instant doubt solving, adaptive quizzes, and smart progress tracking.
        </p>

        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <h2>💡 Idea</h2>
            <p>AI-driven learning for customized education.</p>
          </div>
          <div className="card">
            <h2>🚨 Problem</h2>
            <p>Traditional learning is rigid and non-adaptive.</p>
          </div>
          <div className="card">
            <h2>🔍 Solution</h2>
            <p>AI analyzes your learning and adapts accordingly.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="button button-login" onClick={() => navigate("/LoginPage")}>Login</button>
          <button className="button button-signup" onClick={() => navigate("/SignupPage")}>Sign Up</button>
        </div>

        {/* AI Mascot */}
        <div className="mascot">
          <img src="" alt="AI Bot"/>
        </div>
      </div>
   
  );
};

export default LandingPage;
