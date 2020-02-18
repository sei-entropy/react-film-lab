import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmList extends Component {
  render() {
    let allFilms = this.props.films.map((film, index) => (
      <FilmRow
        filmTitle={film.title}
        release_date={film.release_date}
        backdropUrl={film.backdrop_path}
        id={film.id}
        overview={film.overview}
        poster_path={"https://image.tmdb.org/t/p/w780" + film.poster_path}
      />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}
