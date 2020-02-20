import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

export default class FilmRow extends React.Component{

    handleDetailsClick=(film)=>{
        console.log("Fetching details for :"+film);
        
    }

    render(){
        // const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.image 
        const dateYear=new Date(this.props.film.release_date).getFullYear()

    return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
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
