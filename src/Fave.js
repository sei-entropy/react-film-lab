import React, { Component } from "react";

export default class Fave extends Component {
  // Click handler with an arrow function that binds the event
  handleClick = e => {
    console.log("not working");
  };

  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
