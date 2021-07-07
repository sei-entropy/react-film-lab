import React from 'react';
 import FilmPoster from './film-poster';

export default class FilmRow extends React.Component{
    
    render(){
       
       const posterUrl = this.props.getImg + this.props.film.poster_path;

        return(
            <div className="film-row">
              {/* <img src={'https://image.tmdb.org/t/p/w780/' +this.props.film.poster_path} alt="" /> */}
              <FilmPoster  posterUrl={posterUrl} title={this.props.film.title}/>
              <div className="film-summary">
                 <h1>{this.props.film.title} </h1>
                 <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                 
              </div>
            </div>
        )
    }
}