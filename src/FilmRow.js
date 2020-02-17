import React from "react";
import FilmPoster from "./FilmPoster";

class FlimRow extends React.Component {
    render() {
        const { title, poster_path, release_date } = this.props.film;
        const year = new Date(release_date).getFullYear();

        return (
            <div className="film-row">
                <FilmPoster path={poster_path} title={title} />

                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        );
    }
}

export default FlimRow;
