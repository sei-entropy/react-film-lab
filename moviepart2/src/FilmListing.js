import React, { Component } from "react";
// import the FilmRow child component
import FilmRow from "./FilmRow";

export default class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = filter => {
    this.setState({ filter: filter });
  };

  render() {
    const allFilms = this.props.films.map((film) => {
      return (
      <FilmRow
      film={film}
      key={film.id}
      onFaveToggle={() => this.props.onFaveToggle(film)} />
    )
    })
    return (
      // Main div for the film listing, with films h1 tag under it
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
