import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(rgb(82, 33, 125), rgb(19, 2, 30));
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
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .settings-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            width: 300px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
          }
          .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          .toggle {
            width: 40px;
            height: 20px;
            background: #ccc;
            border-radius: 10px;
            position: relative;
            cursor: pointer;
          }
          .toggle::before {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 14px;
            height: 14px;
            background: white;
            border-radius: 50%;
            transition: 0.3s;
          }
          .toggle.active {
            background: #28a745;
          }
          .toggle.active::before {
            left: 23px;
          }
          .save-button, .logout-button {
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          .save-button {
            background: #007bff;
            color: white;
          }
          .save-button:hover {
            background: #0056b3;
            transform: scale(1.1);
          }
          .logout-button {
            background: #dc3545;
            color: white;
            margin-top: 10px;
          }
          .logout-button:hover {
            background: #b02a37;
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="container">
        <h1 className="title">Settings</h1>

        <div className="settings-card">
          <div className="setting-item">
            <span>Dark Mode</span>
            <div
              className={`toggle ${darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode(!darkMode)}
            ></div>
          </div>
          <div className="setting-item">
            <span>Notifications</span>
            <div
              className={`toggle ${notifications ? 'active' : ''}`}
              onClick={() => setNotifications(!notifications)}
            ></div>
          </div>
        </div>

        <button className="save-button">Save Changes</button>
        <button className="logout-button" onClick={() => navigate("/LogoutPage")}>Logout</button>
      </div>
    </div>
  );
};

export default SettingsPage;
