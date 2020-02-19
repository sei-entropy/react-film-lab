import React, { Component } from "react";


export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Click handler with an arrow function that binds the event
  handleClick(e) {
    e.stopPropagation();
    console.log("Handling Fave click!");
    //  this.props.onFaveToggle();
  }

  render() {
    const isFave= this.props.isFave ? "remove_from_queue" : "add_to_queue";
    const message= this.props.isFave ? "remove_from_queue" : "add_to_queue";
   
    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
        <p className="material-icons">{message}</p>
      </div>
    );
  }
}
