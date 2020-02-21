import React, { Component } from "react";
// import FilmPost, Fave child components
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

export default class FilmRow extends Component {
  // part 4 we remove this handleDetailsClick(film) because we no longer need it here 
  
  // handleDetailsClick(film) x we use the App instead to get the data from Axios Api :)
 

  render() {
    const getImg = "https://image.tmdb.org/t/p/w780";
    // Declaring variables to hold the props
    // Create the Url for the poster
    const posterUrl = getImg + this.props.film.poster_path;
    // Get the Film title
    const title = this.props.film.title;
    // Get the release date in a date object
    const releaseDate = new Date(this.props.film.release_date);
    // Get the year from the release date
    const releaseYear = releaseDate.getFullYear();

    return (
      // Create a main div holding each row
      <div
        className="film-row"
        onClick={() => this.props.handleDetailsClick(this.props.film)}
      >
        {/* Create a child component holding the poster, 
        and passing the image and title as props */}
        <FilmPoster posterUrl={posterUrl} title={title} />

        {/* Create a div about the movie summary containing the title
        and release year */}
        <div className="film-summary">
          <Fave
            onFaveToggle={this.props.onFaveToggle}
            isFave={this.props.isFave}
          />
          <h1>{title}</h1>

          <p>{releaseYear}</p>
        </div>
      </div>
    );
  }
}
