import React from 'react'
import Fave from "./Fave";
import FilmPoster from "./FilmPoster";

const FilmRow = (props) => {
    const filmYear = new Date(props.film.release_date);
    const getImg = "https://image.tmdb.org/t/p/w780";
    const posterUrl = getImg + props.film.poster_path;
    return (
        <div className="film-row" onClick={() => {props.handleDetailsClick(props.film)}}>
            <FilmPoster posterUrl={posterUrl}  />
            <div className="film-summary">
                <h1>{props.film.title}</h1>

                <p>{filmYear.getFullYear()}</p>
            </div>
            <Fave isFave={props.isFave} onFaveToggle={() => {props.onFaveToggle(props.film)} }/>
        </div>
    );
}



export default FilmRow;

