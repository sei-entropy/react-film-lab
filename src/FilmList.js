import React, { Component } from "react";
import FilmRow from "./FilmRow";
import Fave from "./Fave";

export default class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = faves => {
    console.log(faves);

    const filteredFilmList = this.props.faves.filter(function(film) {
      return film.includes("faves");
    });

    this.setState({
      filter: filteredFilmList
    });
  };

  // handleFilterClick = faves => {
  //   // const filteredFilmList =
  //   console.log("321 test list");
  //   function(faves) {
  //     return console.log(faves);
  //   };
  // };

  render() {
    const filter = this.state.filter ? "all" : "faves";
    const allFilms = this.props.films.map((film, index) => (
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
        <div className="film-list-filters">
          <div
            onClick={() => this.handleFilterClick()}
            className="film-list-filter"
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            onClick={() => this.handleFilterClick()}
            className="film-list-filter"
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
