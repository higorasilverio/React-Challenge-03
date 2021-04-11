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

  generateNonContiguous(min, max, array) {
    const random = parseInt(Math.random() * ((max + 1) - min)) + min;
    return array.includes(random) ? this.generateNonContiguous(min, max, array) : random;
  }

  generateNumbers(quantity){
    const numbers = Array(quantity)
    .fill(0)
    .reduce((array) => {
      const newNumber = this.generateNonContiguous(1, 60, array)
      return [ ...array, newNumber ]
    }, [])
    .sort((n1, n2) => n1-n2)
    return numbers
  }

  setElementsNumber = (newValue) => {
    this.setState({
      number: newValue,
    });
  };

  generateRandomNumbers = () => {
    this.setState({
      randomArray: this.generateNumbers(this.state.number)
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
