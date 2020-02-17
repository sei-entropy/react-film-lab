import React from "react";
import { TMDB } from "./TMDB";
export default class FilmListing extends React.Component {
  render() {
    let allFilms = TMDB.films.map((film, index) => (
      <div className="test01">{film.title}</div>
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <p> {allFilms}</p>
      </div>
    );
  }
}
