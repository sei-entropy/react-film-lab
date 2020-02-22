import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

export default function  FilmRow(props) {


        // const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.image 
        const dateYear=new Date(props.film.release_date).getFullYear()

    return (
        <div className="film-row" onClick={(film) => props.onDetails(film)}>
     {/* <img src={posterUrl} alt="film-Image" /> */}
        {/* <FilmPoster image={this.props.image} /> */}
        <FilmPoster film={props.film.poster_path}/>
        <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{dateYear}</p>
        </div>
        <Fave isFave={props.isFave} onFaveToggle={(film) => props.onFaveToggle(film)} />

        </div>
    );
    
}
