import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

export default class FilmRow extends Component {
  handleDetailsClick = film => {
    // const filteredFilmList =
    console.log(this.props.filmTitle);
    // function(faves) {
    //   return console.log(faves);
    // };
  };
  render() {
    const posterUrl = this.props.poster_path;
    const title = this.props.filmTitle;
    const releaseDate = new Date(this.props.release_date);
    const releaseYear = releaseDate.getFullYear();
    return (
      <div className="film-row">
        <FilmPoster posterUrl={posterUrl} title={title} />

        <div onClick={() => this.handleDetailsClick()} className="film-summary">
          <h1>{title}</h1>
          <p>{releaseYear}</p>
          <Fave />
        </div>
      </div>
    );
  }
}
