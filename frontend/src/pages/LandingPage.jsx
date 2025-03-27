import React from "react";
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
