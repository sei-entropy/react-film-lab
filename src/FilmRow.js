import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

export default class FilmRow extends Component {
    handleDetailsClick(film) {
        console.log(`Fetching details for ${film.title}`);
    }

    render() {
        const getImg = "https://image.tmdb.org/t/p/w780";

        const posterUrl = getImg + this.props.film.poster_path;
        const title = this.props.film.title;
        const releaseDate = new Date(this.props.film.release_date);
        const releaseYear = releaseDate.getFullYear();

        return (
            <div
                className="film-row"
                onClick={() => this.handleDetailsClick(this.props.film)}
            >

                <FilmPoster posterUrl={posterUrl} title={title} />

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