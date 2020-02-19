import React from "react";
export default class Fave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isFave: false
    };
  }
  handleClick = (e) => {
    e.stopPropagation();
    console.log("handling Fave click!");
    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle();
    // this.setState({
    //   isFave: !this.state.isFave
    // });
  };
  render() {
    const isFave = (this.props.isFave) ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={"film-row-fave " + isFave} onClick = {() => this.handleClick(this.props.title)}>
        <p className="material-icons" onClick={this.handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}
