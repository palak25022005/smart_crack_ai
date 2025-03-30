import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuizSelectionPage = () => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState({ Physics: [], Chemistry: [], Maths: [] });
  const [selectedLessons, setSelectedLessons] = useState([]);
  const [difficulty, setDifficulty] = useState("Easy");
  const [numQuestions, setNumQuestions] = useState(20);

  useEffect(() => {
    ["Physics", "Chemistry", "Maths"].forEach(async (subject) => {
      const response = await axios.get(`http://localhost:5000/chapters/${subject}`);
      setChapters((prev) => ({ ...prev, [subject]: response.data }));
    });
  }, []);

  const toggleSelection = (chapterId) => {
    setSelectedLessons((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId]
    );
  };

 /*
const handleAttemptQuiz = async () => {
  const student_id = localStorage.getItem("student_id");
  if (!student_id) {
    alert("Student ID not found. Please log in again.");
    return;
  }

  if (selectedLessons.length === 0) {
    alert("Please select at least one chapter.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/quiz/generate", {
      student_id,
      selectedLessons,
      difficulty,
      num_questions: numQuestions,
    });

    console.log("Quiz Generation Response:", response.data);

    if (response.data.quiz_id) {
      localStorage.setItem("quiz_id", response.data.quiz_id); // ✅ Store in localStorage
      navigate("/QuizAttemptPage"); // ✅ Navigate without query params
    } else {
      alert("Quiz generation failed. Please try again.");
    }
  } catch (error) {
    console.error("Error generating quiz:", error.response ? error.response.data : error.message);
    alert("Failed to generate quiz. Check console for details.");
  }
};
*/
const handleAttemptQuiz = async () => {
  const student_id = localStorage.getItem("student_id");
  console.log("Student ID:", student_id); // ✅ Check if student_id is found

  if (!student_id) {
    alert("Student ID not found. Please log in again.");
    return;
  }

  if (selectedLessons.length === 0) {
    alert("Please select at least one chapter.");
    return;
  }

  console.log("Selected Lessons:", selectedLessons);
  console.log("Difficulty:", difficulty);
  console.log("Number of Questions:", numQuestions);

  try {
    const response = await axios.post("http://localhost:5000/quiz/generate", {
      student_id,
      selectedLessons,
      difficulty,
      num_questions: numQuestions,
    });

    console.log("Quiz Generation Response:", response.data); // ✅ See what backend sends

    if (response.data.quiz_id) {
      localStorage.setItem("quiz_id", response.data.quiz_id);
      navigate("/QuizAttemptPage");
    } else {
      alert("Quiz generation failed. Please try again.");
    }
  } catch (error) {
    console.error("Error generating quiz:", error.response ? error.response.data : error.message);
    alert("Failed to generate quiz. Check console for details.");
  }
};


  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(rgb(92, 23, 104), rgb(0, 0, 0));
          color: white;
          text-align: center;
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
        .container {
          display: flex;
          justify-content: space-around;
          padding: 20px;
          margin-top: 50px;
        }
        .section {
          width: 30%;
        }
        .lesson-button {
          background: #800080;
          color: white;
          border: none;
          padding: 10px;
          margin: 5px;
          width: 80%;
          border-radius: 10px;
          cursor: pointer;
        }
        .lesson-button:hover {
          background: #a020f0;
        }
        .selected {
          background: #32cd32 !important;
          color: black;
          font-weight: bold;
        }
        .dropdown-container {
          margin-top: 20px;
        }
        select {
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          font-size: 1rem;
        }
        .attempt-quiz-button {
          background: #ff4500;
          padding: 15px;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>

      <div className="navbar">
        <button className="nav-button">SmartCrackAI</button>
        <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
        <button className="nav-button active" onClick={() => navigate("/LearnPage")}>Learn</button>
        <button className="nav-button" onClick={() => navigate("/AITutor")}>AiTutor</button>
        <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
        <button className="nav-button active" onClick={() => navigate("/StressBuster")}>StressBuster</button>
 
        <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
      </div>

      <div className="container">
        {["Physics", "Chemistry", "Maths"].map((subject) => (
          <div className="section" key={subject}>
            <div className="section-header">{subject} Lessons</div>
            {chapters[subject].map((chapter) => (
              <button
                key={chapter.chapter_id}
                className={`lesson-button ${selectedLessons.includes(chapter.chapter_id) ? "selected" : ""}`}
                onClick={() => toggleSelection(chapter.chapter_id)}
              >
                {chapter.name}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="dropdown-container">
        <label>Difficulty Level: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="dropdown-container">
        <label>Number of Questions: </label>
        <select value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}>
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={60}>60</option>
        </select>
      </div>

      <button className="attempt-quiz-button" onClick={handleAttemptQuiz}>Attempt Quiz</button>
    </div>
  );
};

export default QuizSelectionPage;

