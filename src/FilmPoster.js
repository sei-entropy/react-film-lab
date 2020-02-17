import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmPoster extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const posterUrl = "https://image.tmdb.org/t/p/w780";
        return (
            <img src={posterUrl+this.props.films.poster_path} alt="" />
        );
    }
}