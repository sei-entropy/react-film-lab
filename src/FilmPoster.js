import React, { Component } from "react";

export default class FilmPoster extends Component {
  render() {
    return (
      //  main div for the image, it gets the information
      //  from the parent props
      <div>
        <img src={this.props.posterUrl} alt={this.props.title} />
      </div>
    );
  }
}