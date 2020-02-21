import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'


function FilmRow(props) {


    const years = new Date(props.film.release_date)

    return (
        <div className="film-row"
            onClick={props.onDetailsClick}>
            <FilmPoster posterPath={props.film.poster_path} />

            <div className="film-summary">
                < Fave onFaveToggle={props.onFaveToggle}
                    isFave={props.isFave} />
                <h1>{props.film.title}</h1>
                <p>{years.getFullYear()}</p>
            </div>
        </div>
    )


};
export default FilmRow;