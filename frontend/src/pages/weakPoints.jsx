import React from "react";

const WeakPoints = () => {
  return (
    <>
      <style>{`
        .weakpoints-container {
          background: linear-gradient(to bottom, #2e005b, #4b0082);
          height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .weakpoints-box {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 15px;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .weak-point {
          background: #6a0dad;
          color: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .weak-point:hover {
          background: #4b0082;
          transform: scale(1.05);
        }
      `}</style>

      <div className="weakpoints-container">
        <div className="weakpoints-box">
          <h2>Weak Points Analysis</h2>
          <p>Improve your weak areas by reviewing these topics:</p>

          <div className="weak-point">Physics - Rotational Motion</div>
          <div className="weak-point">Chemistry - Organic Reactions</div>
          <div className="weak-point">Mathematics - Integration</div>
          <div className="weak-point">Biology - Genetics</div>
        </div>
      </div>
    </>
  );
};

export default WeakPoints;
