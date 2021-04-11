import React from "react";

import "./InputForm.css"

const InputForm = (props) => {
  return (
    <div className="InputForm">
      <div className="Label">
        <label htmlFor="numbersQuantity">Numbers Quantity:</label>
      </div>
      <div className="Input">
        <input
          id="numbersQuantity"
          type="number"
          min={6}
          max={15}
          value={props.number}
          onChange={(e) => props.setElementsNumber(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputForm;
