import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmList extends Component {
  handleFilterClick(filter) {
    console.log(`setting filter to ${filter}`);
  }

  render() {
    const allFilms = this.props.films.map((film, index) => (
      <FilmRow
        key={film.id}
        filmTitle={film.title}
        release_date={film.release_date}
        backdropUrl={film.backdrop_path}
        overview={film.overview}
        poster_path={"https://image.tmdb.org/t/p/w780" + film.poster_path}
      />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className="film-list-filter"
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className="film-list-filter"
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
