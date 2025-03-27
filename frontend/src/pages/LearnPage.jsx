import React from "react";
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Learn Page</h1>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/videoRecommendationPage")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          Video Recommendation
        </button>
        <button
          onClick={() => navigate("/MCQs")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
        >
          Practice MCQs
        </button>
        <button
          onClick={() => navigate("/QuizAttemptPage")}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600"
        >
          Quiz
        </button>
        <button
          onClick={() => navigate("/Notes")}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600"
        >
          Notes
        </button>
        <button
          onClick={() => navigate("/weakPoints")}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600"
        >
          Weak Points
        </button>
      </div>
    </div>
  );
};

export default LearnPage;
