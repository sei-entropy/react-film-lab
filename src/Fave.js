import React, { Component } from "react";

export default class Fave extends Component {
  // constructor(props) {
  //   super(props);

  //   //
  //   this.state = {
  //     isFave: false}

  //     // this.setState = {

  //     // Fave: !this.state.isFave
  //     // }
  //   };
  // }

  handleClick = e => {
    // const textValue = e.target.value;
    console.log("test FAVE ");
    e.stopPropagation();
  };

  render() {
    // const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
