import React from "react";
import { TMDB } from "./TMDB";
export default class FilmRow extends React.Component {
  render() {
    let allFilms = TMDB.films.map((film, index) => <h1>{film.title}</h1>);
    return <div className="film-list"></div>;
  }
}

export default class Comments extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
