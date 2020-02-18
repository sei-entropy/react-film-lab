import React from "react";
import TMDB from "./TMDB";
export default class Filmrow extends React.Component {
  render() {
    const Movie = TMDB.films;
    var d = new Date().getFullYear();

    const filmsTitle = Movie.map(function(film) {
      return (
        <div className="film-row" key={film.id}>
          <img
            src={"https://image.tmdb.org/t/p/w780/" + film.poster_path}
            alt="film image"
          />

          <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{film.release_date}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <ul>{filmsTitle}</ul>
      </div>
    );
  }
}
