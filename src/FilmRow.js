import React from "react";
import Filmposter from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends React.Component {
  handleDetailsClick = (film)=> {

    console.log("Fetching details for : " + film);
  };
  render() {
    const year = new Date(this.props.Film.release_date).getFullYear();
    return (
      <div className="film-row" onClick={ () => this.handleDetailsClick(this.props.Film.title)}>
        <Filmposter poster={this.props.Film} />
        <div className="film-summary">
          {/* Film from  return <FilmRow Film = {film} key = {index} /> */}
          <h1>{this.props.Film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave />
      </div>
    );
  }
}
