import React from "react";
import { useNavigate } from "react-router-dom";

const QuizAttemptPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Attempt</h1>

      {/* Submit Quiz Button */}
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
