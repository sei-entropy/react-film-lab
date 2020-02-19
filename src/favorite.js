import React, { Component } from "react";

export default class Fave extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
       console.log('handling Fave click!');

      }
  render() {
    return (
      <div className="film-row-fave add_to_queue">
        <p className="material-icons" onClick={this.handleClick}>add_to_queue</p>
        
      </div>
    );
  }
}
