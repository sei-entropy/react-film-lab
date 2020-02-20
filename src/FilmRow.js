import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

export default class FilmRow extends React.Component{


    render(){
        // const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.image 
        const dateYear=new Date(this.props.film.release_date).getFullYear()

    return (
        <div className="film-row" onClick={(film) => this.props.onDetails(film)}>
     {/* <img src={posterUrl} alt="film-Image" /> */}
        {/* <FilmPoster image={this.props.image} /> */}
        <FilmPoster film={this.props.film.poster_path}/>
        <div className="film-summary">
        <h1>{this.props.film.title}</h1>
        <p>{dateYear}</p>
        </div>
        <Fave isFave={this.props.isFave} onFaveToggle={(film) => this.props.onFaveToggle(film)} />

        </div>
    );
    }
}
