import React from "react";
import Filmposter from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends React.Component {
  handleDetailsClick = (film)=> {

    console.log("Fetching details for : " + film.title);
  };
  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      // onClick={ () => this.handleDetailsClick(this.props.Film.title)}
      <div className="film-row" onClick={ () => this.handleDetailsClick(this.props.film)}>
        <Filmposter poster={this.props.film} />
        <div className="film-summary">
          {/* <Fave onFaveToggle = {this.props.onFaveToggle} isFave = {this.props.isFave}/> */}
          {/* Film from  return <FilmRow Film = {film} key = {index} /> */}
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave onFaveToggle = {this.props.onFaveToggle} isFave = {this.props.isFave}/>
      </div>
    );
  }
}
