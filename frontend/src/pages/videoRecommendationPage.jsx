/*import React from 'react'

const videoRecommendationPage = () => {
  return (
    <div>
      video recommendation 
    </div>
  )
}

export default videoRecommendationPage
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhysicsLearningDashboard = () => {
  const recommendedVideos = [
    { id: 1, thumbnail: "https://i.ytimg.com/vi/QkHrKzQPg7o/maxresdefault.jpg", title: "LVL 1 vs LVL 100", duration: "3:16:40" },
    { id: 2, thumbnail: "https://i.ytimg.com/vi/aRDOqiqBUQY/maxresdefault.jpg", title: "INFINITE SLIT PARADOX", duration: "43:37" },
    { id: 3, thumbnail: "https://i.ytimg.com/vi/R34C9cMxBY8/maxresdefault.jpg", title: "HOW TIME WORKS", duration: "12:35" },
    { id: 4, thumbnail: "https://i.ytimg.com/vi/kF4ju6j6aLE/maxresdefault.jpg", title: "E=mc²", duration: "16:08" },
    { id: 5, thumbnail: "https://i.ytimg.com/vi/YhXdZR7mEKU/maxresdefault.jpg", title: "ENTROPY", duration: "27:15" },
    { id: 6, thumbnail: "https://i.ytimg.com/vi/xrKryMuJ5NM/maxresdefault.jpg", title: "QUANTUM PHYSICS", duration: "59:23" }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  const lessons = {
    Physics: ["Kinematics", "Laws of Motion", "Thermodynamics"],
    Chemistry: ["Organic Chemistry", "Periodic Table", "Chemical Reactions"],
    Maths: ["Algebra", "Calculus", "Geometry"]
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Subjects</h2>
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Select Subject ▼
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {Object.keys(lessons).map(subject => (
                <li key={subject} onClick={() => setSelectedSubject(subject)}>{subject}</li>
              ))}
            </ul>
          )}
        </div>
        {selectedSubject && (
          <ul className="lessons-list">
            {lessons[selectedSubject].map((lesson, index) => (
              <button key={index} className="lesson-button" onClick={() => navigate(`/lesson/${lesson}`)}>
                {lesson}
              </button>
            ))}
          </ul>
        )}
      </div>

      <div className="main-content">
      <div className="navbar">
        <button className="nav-button" >SmartCrack AI</button>
        <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
        <button className="nav-button active">Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>
        <h1 className="content-title">AI Recommended Videos</h1>
        <div className="videos-grid">
          {recommendedVideos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-title">{video.title}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        body, html {
          height: 100%;
          background: linear-gradient(rgb(97, 36, 159),rgb(18, 1, 30));
          margin: 0;
          font-family: Arial, sans-serif;
          display: flex;
        }

        .content-title{
        margin-top: 100px;
        }

        .dashboard-container {
          display: flex;
          height: 100vh;
          color: white;
        }

        .sidebar {
          width: 250px;
          background: linear-gradient(rgb(97, 36, 159),rgb(18, 1, 30));
          color: white;
          height: 100vh;
          padding: 20px;
          position: fixed;
          left: 0;
          top: 0;
        }

        .sidebar h2 {
          text-align: center;
        }

        .dropdown {
          margin-top: 20px;
        }

        .dropdown-button {
          background:rgb(0, 0, 0);
          color: white;
          padding: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .dropdown-menu {
          background: black;
          color: white;
          list-style: none;
          padding: 10px;
          border-radius: 5px;
          margin-top: 5px;
        }

        .dropdown-menu li {
          padding: 5px;
          cursor: pointer;
        }

        .dropdown-menu li:hover {
          background: #ddd;
        }

        .lesson-button {
          background: black;
          color: white;
          padding: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          margin-bottom: 5px;
        }

        .lesson-button:hover {
          background: #ddd;
        }
        
       
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 20px;
        }

        .video-card {
          background: black;
          padding: 10px;
          border-radius: 10px;
          text-align: center;
        }

        .video-thumbnail img {
          width: 100%;
          border-radius: 10px;
          height: 150px;
          object-fit: cover;
        }


        .video-duration {
          display: block;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px;
          border-radius: 5px;
          margin-top: 5px;
        }

        .main-content {
          flex: 1;
          padding: 20px 30px;
          overflow-y: auto;
          margin-left: 300px;
        }

        .navbar {
          display: flex;
          justify-content: space-around;
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
          padding: 15px 30px;
          border-radius: 10px;
          border: 1px solid white;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.1rem;
          transition: 0.3s;
        }

        .nav-button:hover {
          background: #2e005b;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default PhysicsLearningDashboard;