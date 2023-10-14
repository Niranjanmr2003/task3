import React from "react";
import ColorPicker from "./Components/ColourPicker";
import "./App.css";

const colors = ["red", "green", "blue", "yellow", "orange", "pink", "violet", "black", "brown", "darkgreen"];

function App() {
  return (
    <div className="App">
      <h1>Colour Picker</h1>
      <div className="color-picker-container">
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
}

export default App;