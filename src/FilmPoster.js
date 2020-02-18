import React from 'react';


export default class FilmPoster extends React.Component { 

    render() { 
        const posterUrl="https://image.tmdb.org/t/p/w780"+this.props.poster;
        return(
            <img src={posterUrl} alt="film-Image" /> 
            )
    }
}