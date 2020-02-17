import React from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component{
  render(){
    const allFilms = this.props.movie.films.map((film, index) => {
        return <FilmRow 
        film = {film} 
        key ={index}/>
    })

    return(
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
            {allFilms}
        </div>
    );
  }
}
