import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md w-full fixed top-0 left-0 z-50">
      {/* Website Name */}
      <h1 className="text-lg font-semibold whitespace-nowrap">SmartCrack AI</h1>

      {/* Navigation Links */}
      <div className="flex space-x-3">
        <Link to="/" className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md hover:bg-gray-200 transition">Dashboard</Link>
        <Link to="/LearnPage" className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md hover:bg-gray-200 transition">Learn</Link>
        <Link to="/AITutor" className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md hover:bg-gray-200 transition">AI Tutor</Link>
        <Link to="/QuizSelectionPage" className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md hover:bg-gray-200 transition">AI Quiz</Link>
        <Link to="/TextToAudioPage" className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md hover:bg-gray-200 transition">Text to Audio</Link>
      </div>
    </nav>
  );
};

export default NavBar;
