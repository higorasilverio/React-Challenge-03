import React from "react";

import "./Mega.css"

import InputForm from "./InputForm";
import Display from "./Display";
import GenerateButton from "./GenerateButton";

class Mega extends React.Component {
  state = {
    number: this.props.numberAmount || 6,
    randomArray: [],
  };

  setElementsNumber = (newValue) => {
    this.setState({
      number: newValue,
    });
  };

  generateRandomNumbers = () => {
    this.setState({
      randomArray: Array.from(Array(this.state.number)).map(() =>
        Math.ceil(Math.random() * 60)
      ),
    });
  };

  render() {
    return (
      <div className="Mega">
          <div className="Title">
            <h3>Lucky Numbers</h3>
          </div>
          <div className="Card">
            <InputForm
            number={this.state.number}
            setElementsNumber={this.setElementsNumber}
            />
            <Display randomArray={this.state.randomArray} />
            <GenerateButton generateRandomNumbers={this.generateRandomNumbers} />
          </div>
      </div>
    );
  }
}

export default Mega;
