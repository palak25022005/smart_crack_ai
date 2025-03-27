import React from "react";
import { useNavigate } from "react-router-dom";

const QuizSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Selection</h1>
      <button
        onClick={() => navigate("/QuizAttemptPage")}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSelectionPage;
