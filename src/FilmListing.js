import React from 'react';
import FilmRow from './FilmRow.js'



export default class FilmListing extends React.Component { 
  render() 
  { 
        const allFilms = this.props.films.map(function (film){
         return < FilmRow title={film.title} 
         key={film.id}
         year_relase={film.release_date} 
         poster={film.poster_path}
         />;
       });
   

    return    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    {allFilms}
    
  </div>

  }
}