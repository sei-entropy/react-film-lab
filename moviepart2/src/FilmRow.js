import React, { Component } from "react";
// import filmPost child component
import FilmPoster from "./FilmPoster";
import Fave from ' ./Fave'

export default class FilmRow extends Component {

    constructor(props){

        super(props);
        
        }
    handleDetailsClick=(filmtitle)=>{console.log('Fetching details for ',filmtitle)}
  
  
    render() {
        
    // Declaring variables to hold the props
    // Create the Url for the poster
    const posterUrl = this.props.getImg + this.props.film.poster_path;
    // Get the Film title
    const title = this.props.film.title;
    // Get the release date in a date object
    const releaseDate = new Date(this.props.film.release_date);
    // Get the year from the release date
    const releaseYear = releaseDate.getFullYear();

    return (
      // Create a main div holding each row
      <div className="film-row">
        <div onClick={() => this.handleDetailsClick(this.props.film.title)} className="film-row">/
        {/* Create a child component holding the poster, 
        and passing the image and title as props */}
      { /* <FilmPoster posterUrl={posterUrl} title={title} />*/}

        {/* Create a div about the movie summary containing the title
        and release year */}
        <div className="film-summary"/>
          <h1>{title}</h1>

          <p>{releaseYear}</p>
    </div>
       
    );
  }}
  </div>