import React, { useState } from "react";
import "./ColourPicker.css";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      <button class="button"onClick={() => setShowColors(!showColors)}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ColorPicker;
