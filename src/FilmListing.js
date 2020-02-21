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
    console.log("Setting filter to " + filter);
    this.setState({
      filter: filter
    });
  };

  render() {
    let showFilms =[];
    

    //  Create a constant variable array holding Film Row components
    //  it creates components by mapping through the films array from
    //  props then pass the props to FilmRow Child component
    const allFilms = this.props.films.map((film, index) => (
      <FilmRow 
          handleDetailsClick ={this.props.handleDetailsClick}
          film={film}
          key={index}
          isFave={this.props.faves.includes(film)}
          onFaveToggle={()=>this.props.onFaveToggle(film)}
           />
    ));
    const favesFilm = this.props.faves.map((film,index) => {
      return (
        <FilmRow
          handleDetailsClick={this.props.handleDetailsClick}
          film={film}
          key={index}
          isFave={this.props.faves.includes(film)}
          onFaveToggle={() => this.props.onFaveToggle(film)}
        />
      );
    });
    

    this.state.filter === "all"
      ? (showFilms = allFilms)
      : (showFilms = favesFilm);

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
            className={`film-list-filter  ${
              this.state.filter === "fave" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("fave")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {showFilms}
      </div>
    );
  }
}
