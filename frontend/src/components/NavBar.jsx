import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Website Name */}
      <h1 className="text-2xl font-bold">SmartCrack AI</h1>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link to="/" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">Dashboard</Link>
        <Link to="/LearnPage" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">Learn</Link>
        <Link to="/AITutor" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">AI Tutor</Link>
        <Link to="/QuizSelectionPage" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">AI Quiz</Link>
        <Link to="/TextToAudioPage" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">Text to Audio</Link>
          </div>
    </nav>
  );
};

export default NavBar;

