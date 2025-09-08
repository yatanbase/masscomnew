// src/page/FreeTraining.jsx
import React from "react";

const FreeTraining = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Free Training at SJMC</h1>
      <p>Please select an option:</p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            backgroundColor: "darkred",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Button 1
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            backgroundColor: "darkgreen",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Button 3
        </button>
      </div>
    </div>
  );
};

export default FreeTraining;
