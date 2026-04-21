import React, { Component } from "react";
import "../App.css";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Show",
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      buttonText: prevState.buttonText === "Show" ? "Hide" : "Show",
    }));
  };

  render() {
    return (
      <div id="center">
        <br /> 
        <button className="counter" onClick={this.handleClick}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
