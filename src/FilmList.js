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

  handleFilterClick = filter => {
    console.log(filter);

    this.setState({
      filter: filter
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
    // const getImg = "https://image.tmdb.org/t/p/w780";

    const filter = this.state.filter ? "all" : "faves";

    // const allFilms = this.props.films.map((film, index) => (
    //   <FilmRow film={film} key={film.id} getImg={getImg} />
    // ));

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
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            onClick={() => this.handleFilterClick("faves")}
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {/* All films FilmRow components array */}
        {allFilms}
      </div>
    );
  }
}
