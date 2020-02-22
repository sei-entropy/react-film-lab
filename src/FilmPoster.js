import React from 'react'

const FilmPoster = (props) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`}
                alt={props.film.title} />
        </div>
    )
}

export default FilmPoster
