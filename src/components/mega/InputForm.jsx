import React from "react";

const InputForm = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="numbersQuantity">Numbers Quantity:</label>
      </div>
      <input
        id="numbersQuantity"
        type="number"
        min={6}
        max={15}
        value={props.number}
        onChange={(e) => props.setElementsNumber(+e.target.value)}
      />
    </div>
  );
};

export default InputForm;
