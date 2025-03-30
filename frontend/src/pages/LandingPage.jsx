/*import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Smart Crack AI</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        Our platform helps students prepare smarter with AI-powered learning tools. 
        Get instant answers to your doubts, AI-generated notes, and personalized quizzes!
      </p>
      <p className="text-gray-500 text-center max-w-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate("/LoginPage")}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate("/SignupPage")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

*/

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
            padding-left:290px;
            margin-left: 160px;
          }
          .cards {
            display: flex;
            padding-left:290px;
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
            padding-left:630px;
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
          .robot{
           width: 120px;
           padding-left:600px;
           margin-top: -7px;
          }
        `}
      </style>

      {/* Main Content */}
      
        <h1 className="title"> Welcome to SmartCrack AI</h1>
        <p className="subtitle">
          AI-powered EdTech for personalized learning—instant doubt solving, adaptive quizzes, and smart progress tracking.
        </p>

        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <h2>💡 Idea</h2>
            <p>SmartCrack AI is your ultimate learning companion, blending AI-powered tutoring, adaptive quizzes, and smart summarization to make studying efficient and engaging. Master concepts, test your knowledge, and get AI-driven insights—all in one place!</p>
          </div>
          <div className="card">
            <h2>🚨 Problem</h2>
            <p> SmartCrack AI personalizes learning with AI-driven tutoring, adaptive quizzes, and smart summarization, making studying efficient and tailored to each students needs</p>
          </div>
          <div className="card">
            <h2>🔍 Solution</h2>
            <p>Our website uses AI to assess your learning patterns, provide personalized tutoring, generate adaptive quizzes, and summarize key concepts for efficient studying.
</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="button button-login" onClick={() => navigate("/LoginPage")}>Login</button>
          <button className="button button-signup" onClick={() => navigate("/SignupPage")}>Sign Up</button>
        </div>

        <div>
          <img className="robot" src="/Robot.png"/>
        </div>

        
      </div>
   
  );
};

export default LandingPage;
