import React from 'react';
import FilmPoster from './FilmPoster';

export default class FilmRow extends React.Component{

    render(){
        // const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.image 

    return (
        <div className="film-row">
     {/* <img src={posterUrl} alt="film-Image" /> */}
        {/* <FilmPoster image={this.props.image} /> */}
        <FilmPoster image={this.props.image}/>
        <div className="film-summary">
        <h1>{this.props.title}</h1>
        <p>{this.props.date}</p>
        </div>
        </div>
    );
    }
}
