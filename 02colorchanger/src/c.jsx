import { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  // List of colors
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Background Color Changer</h1>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              backgroundColor: color,
              color: "white",
              border: "none",
              margin: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;
