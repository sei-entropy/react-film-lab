import React from 'react';

export default function FilmPoster(props){
        return(
            // Concatenate each film's poster url with its prefix
            <img src={'https://image.tmdb.org/t/p/w780/'+props.poster} alt={props.title} />
        );
}