import React, { useState } from "react";

function Toggle() {
  // maintain state
  const [isOn, setIsOn] = useState(false);

  // eventHandler/avoid invoking immediately
  const handleBtnClick = () => {
    setIsOn((prevState) => {
      // toggle state
      const newState = !prevState;
      return newState;
    });
  };

  // determine color
  const color = isOn ? "red" : "white";

  // style object
  const btnBackground = {
    backgroundColor: color,
  };

  return (
    <button onClick={handleBtnClick} style={btnBackground}>
      {/* conditional rendering */}
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
