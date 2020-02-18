import React from 'react';
import FilmListing from './FilmListing';

export default class FilmRow extends React.Component{
  


        render(){
        
    
            return (
                <div>
                    <h1>{this.props.film.title}</h1>
                    <h1>htpp://image.tmdb.org/t/p/w780/+{this.props.film.poster_path}</h1>
                </div>
            
            );
    }
        <div className="film-row">
        <img src={posterUrl} alt="" />

        <div className="film-summary">
        <h1>{this.props.film.title}</h1>
        <p>YEAR</p>
     </div>
</div>

}
