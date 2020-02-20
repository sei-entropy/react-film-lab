import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmPoster extends React.Component{
    constructor(props) {
        super(props);

    }
    state = {  }
    render() { 
        let posterUrl = "https://image.tmdb.org/t/p/w780/" 
        + this.props.film.poster_path;
        return ( <img src={posterUrl} alt="" /> );
    }
}