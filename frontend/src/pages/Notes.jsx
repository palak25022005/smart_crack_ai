import React, { useState } from "react";

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
];

const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [selectionText, setSelectionText] = useState("");
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

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
      <style>{`
        html, body, #root {
          height: 100%;
          width: 100%;
          background: linear-gradient(rgb(23, 4, 27), #4b0082);
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .notes-box {
          background: black;
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-left: 300px;
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
      `}</style>
    </div>
  );
};

export default Notes;
