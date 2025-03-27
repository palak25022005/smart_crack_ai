import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/LearnPage")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Learn
        </button>

        <button
          onClick={() => navigate("/QuizSelectionPage")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          AI Quiz
        </button>

        <button
          onClick={() => navigate("/AITutor")}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
        >
          AI Tutor
        </button>

        <button
          onClick={() => navigate("/TextToAudioPage")}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Text to Audio
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
