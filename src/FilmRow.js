import React from "react";
// import filmPost child component
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

 export default function render(props) {

  // handleDetailsClick = film => {
  //   console.log(`Fetching details for  ${film.title} `);
  // };

    //  Create a constant variable holding the pre-string
    //  for the database image url
    const getImg = "https://image.tmdb.org/t/p/w780";
    // Declaring variables to hold the props
    // Create the Url for the poster
    const posterUrl = getImg + props.film.poster_path;
    // Get the Film title
    const title = props.film.title;
    // Get the release date in a date object
    const releaseDate = new Date(props.film.release_date);
    // Get the year from the release date
    const releaseYear = releaseDate.getFullYear();

    return (
      // Create a main div holding each row
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        {/* Create a child component holding the poster, 
        and passing the image and title as props */}
        <FilmPoster posterUrl={posterUrl} title={title} />

        {/* Create a div about the movie summary containing the title
        and release year */}
        <div className="film-summary">
        <Fave onFaveToggle = {props.onFaveToggle}
        isFave ={props.isFave}
        />

          <h1>{title}</h1>

          <p>{releaseYear}</p>
        </div>
      </div>
    );
  }

