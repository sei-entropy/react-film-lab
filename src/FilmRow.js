import React, { Component } from "react";
// import filmPost child component
import FilmPoster from "./FilmPoster";
import Fave from './Fave';
import TMDB from './TMDB'


export default class FilmRow extends Component {

    handleFilterClick = (film) => {
        const text = this.props.title


        console.log(text)

    }

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
            <div className="film-row" onClick={() => this.handleFilterClick()}>
                {/* Create a child component holding the poster, 
        and passing the image and title as props */}
                <FilmPoster posterUrl={posterUrl} title={title} />

                {/* Create a div about the movie summary containing the title
        and release year */}
                <div className="film-summary">
                    <h1>{title}</h1>
                    <Fave posterUrl={posterUrl} title={title} />
                    <p>{releaseYear}</p>
                </div>
            </div>

        );
    }

}