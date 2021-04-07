import React from "react";

import "./Display.css";

const Display = (props) => {
  const numbers = props.randomArray.map((number, index) => {
    return (
        <div className="Number" key={index}>
            <span> {number} </span>
        </div>
    )
  });
  return (
    <>
        {numbers}
    </>
  );
};

export default Display;
