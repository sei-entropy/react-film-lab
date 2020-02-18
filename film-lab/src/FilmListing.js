import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component{

render(){
    const getImg = "https://image.tmdb.org/t/p/w780";
let allFilms = this.props.films.map( (film, index) =>  (
     <FilmRow key={film.id} getImg={getImg} film={film} />) );

    return (
        <div className="film-list">

        <h1 className="section-title">FILMS</h1>

        {/* All films components array */}

        {allFilms}

      </div>);
}
}