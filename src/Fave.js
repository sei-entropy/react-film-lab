import React from "react";

export default class Fave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  isFave:false,
    };
  }
  handleClick = e => {
    e.stopPropagation();
    console.log("handling Fave click!");
    //when a user clicks, onFaveToggle will be called at a higher component level.
    this.props.onFaveToggle();
  };
  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    const message = this.props.isFave ? "remove_from_queue" : "add_to_queue";

    return (
      <div
        className={`film-row-fave add_to_queue ${isFave}`}
        onClick={this.handleClick}
      >
        <p className="material-icons">{message}</p>
      </div>
    );
  }
}
