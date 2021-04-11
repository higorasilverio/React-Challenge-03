import React from "react";

import "./GenerateButton.css"

const GenerateButton = (props) => {
  return (
    <div className="GenerateButton">
      <button onClick={props.generateRandomNumbers}>Generate</button>
    </div>
  );
};

export default GenerateButton;
