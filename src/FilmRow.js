import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

function FlimRow(props) {
    const handleDetailsClick = () => {
        props.onShowDetails();
    };

    const { title, poster_path, release_date } = props.film;
    const year = new Date(release_date).getFullYear();

    return (
        <div className="film-row" onClick={handleDetailsClick}>
            <FilmPoster path={poster_path} title={title} />

            <div className="film-summary">
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
            <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
        </div>
    );
}

export default FlimRow;
