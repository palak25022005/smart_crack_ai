/*import React from 'react'

const Notes = () => {
  return (
    <div>
      notes 
    </div>
  )
}

export default Notes
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialNotes = [
  {
    id: 1,
    content:
      "Acceleration: Acceleration is the rate of change of velocity. Unit: ms–2 (metre per second²).",
  },
  {
    id: 2,
    content:
      "Average speed: The average speed of an object is the total distance travelled divided by the total time taken.",
  },
  {
    id: 3,
    content:
      "Average velocity: Defined as displacement divided by the time interval in which the displacement occurs. SI unit: m/s.",
  },
  {
    id: 4,
    content:
      "Average acceleration: Defined as the rate of change of velocity over a given interval. Measured in m/s².",
  },
  {
    id: 5,
    content:
      "Uniform velocity: A particle with uniform velocity undergoes equal displacements in equal intervals of time however small the intervals may be.",
  },
  {
    id: 6,
    content:
      "Uniform acceleration: A particle with uniform acceleration undergoes equal changes in velocity in equal intervals of time, however small the intervals may be.",
  },
  {
    id: 7,
    content:
      "Characteristics of v-t graph: The velocity of an object is its speed in a particular direction. Two cars travelling at the same speed but in opposite directions have different velocities.",
  },
  {
    id: 8,
    content:
      "A velocity-time graph shows the speed and direction an object travels over a specific period of time. Velocity-time graphs are also called speed-time graphs.",
  },
  {
    id: 9,
    content:
      "When an object is moving with a constant velocity, the line on the graph is horizontal. When the horizontal line is at zero velocity, the object is at rest. When an object is undergoing constant acceleration, the line on the graph is straight but sloped.",
  },
  {
    id: 10,
    content:
      "Curved lines on velocity-time graphs also show changes in velocity, but not with a constant acceleration or deceleration. The diagram shows some typical lines on a velocity-time graph.",
  },
];
const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [selectionText, setSelectionText] = useState("");
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

  // Added variables for sidebar functionality
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const lessons = {
    Physics: ["Kinematics", "Laws of Motion", "Thermodynamics"],
    Chemistry: ["Organic Chemistry", "Periodic Table", "Chemical Reactions"],
    Maths: ["Algebra", "Calculus", "Geometry"],
  };

  const navigate = useNavigate();

  // When mouse up occurs inside a note, record the selection and the note index
  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText) {
      // Check if the mouse up event happened within a note paragraph
      const noteParagraph = e.target.closest("p[data-note-index]");
      if (noteParagraph) {
        const noteIndex = Number(noteParagraph.getAttribute("data-note-index"));
        setActiveNoteIndex(noteIndex);
        setSelectionText(selectedText);
      }
    }
  };

  // On clicking the highlight button, update the active note by wrapping the selected text in a span
  const applyHighlight = () => {
    if (activeNoteIndex !== null && selectionText) {
      setNotes((prevNotes) =>
        prevNotes.map((note, index) => {
          if (index === activeNoteIndex) {
            // Replace only the first occurrence in the note content.
            // (For a more robust solution, consider regex or a proper text-range approach.)
            const highlightedText = `<span class="highlighted">${selectionText}</span>`;
            const updatedContent = note.content.replace(selectionText, highlightedText);
            return { ...note, content: updatedContent };
          }
          return note;
        })
      );
      // Clear the selection states
      setSelectionText("");
      setActiveNoteIndex(null);
      window.getSelection().removeAllRanges();
    }
  };

  return (

    
    <div className="notes-box">
<div className="navbar">
          <button className="nav-button" >SmartCrack AI</button>
          <button className="nav-button" onClick={() => navigate("/")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/LearnPage")}>Learn</button>
          <button className="nav-button active" onClick={() => navigate("/AITutor")}>AiTutor</button>
          <button className="nav-button" onClick={() => navigate("/QuizSelectionPage")}>AiQuiz</button>
          <button className="nav-button" onClick={() => navigate("/Settings")}>Settings</button>
        </div>

      <h2>Study Notes</h2>
      <div id="note-here" onMouseUp={handleMouseUp}>
        <div id="Notes">
          {notes.map((note, index) => (
            <p
              key={note.id}
              data-note-index={index}
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
          ))}
        </div>
      </div>
      {selectionText && (
        <button className="highlight-button" onClick={applyHighlight}>
          Highlight Selection
        </button>
      )}

      <div className="sidebar">
        <h2>Subjects</h2>
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Select Subject ▼
          </button>
          <ul className="dropdown-menu">
            {Object.keys(lessons).map((subject) => (
              <li key={subject} onClick={() => setSelectedSubject(subject)}>
                {subject}
              </li>
            ))}
          </ul>
        </div>
        {selectedSubject && (
          <ul className="lessons-list">
            {lessons[selectedSubject].map((lesson, index) => (
              <button
                key={index}
                className="lesson-button"
                onClick={() => navigate(`/lesson/${lesson}`)}
              >
                {lesson}
              </button>
            ))}
          </ul>
        )}
      </div>

      <style>{`
        html, body, #root {
          height: 100%;
          width: 100%;
          background: linear-gradient(rgb(23, 4, 27), #4b0082);
          margin: 0;
          font-family: Arial, sans-serif;
        }

         .navbar {
          display: flex;
          justify-content: space-around; /* Spread evenly */
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
    padding: 15px 30px; /* Increased padding */
    border-radius: 10px; /* Slightly rounded */
      border: 1px solid white;
  border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem; /* Slightly larger text */
    transition: 0.3s;
  }

       .nav-button:hover {
    background: #2e005b;
    transform: scale(1.05);
  }
        .nav-button.active {
          background: #2e005b;
        }

        .notes-box {
          background: black;
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-left: 450px;
          max-width: 800px;
          height: auto;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 90%;
          margin-top: 100px;
        }

        #note-here {
          margin: 20px auto;
          width: 700px;
          max-height: 400px;
          border-radius: 10px;
          background: rgba(123, 120, 120, 0.2);
          padding: 20px;
          overflow-y: auto;
          text-align: left;
        }

        #Notes p {
          margin: 10px 0;
        }

        .highlighted {
          background: yellow !important;
          color: black;
          font-weight: bold;
        }

        .highlight-button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #6a0dad;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        
        .highlight-button:hover {
          background: #4b0082;
        }

        .sidebar {
          width: 250px;
          background: linear-gradient(rgb(97, 36, 159), rgb(18, 1, 30));
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
          background: rgb(0, 0, 0);
          color: white;
          padding: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .dropdown-menu {
          display: ${isDropdownOpen ? "block" : "none"};
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
      `}</style>
    </div>
  );
};

export default Notes;