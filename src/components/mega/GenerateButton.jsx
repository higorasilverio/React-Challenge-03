import React from "react";

const GenerateButton = (props) => {
  return (
    <div>
      <button onClick={props.generateRandomNumbers}>Generate</button>
    </div>
  );
};

export default GenerateButton;
