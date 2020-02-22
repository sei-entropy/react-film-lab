import React from 'react'

export default function FilmPoster (props){

    
        const posterUrl="https://image.tmdb.org/t/p/w780/"+props.film;
        return(
            <img src={posterUrl} alt="film-Image" />

        );
    
}