import React from 'react';
import FilmRow from './FilmRow'


export default class FilmListing extends React.Component{

    render(){
    const allFilms = this.props.filmsList.map(function(film){
        return <FilmRow image={film.poster_path} title={film.title} 
        date={film.release_date} 
        date={new Date().getFullYear()}
        key={film.id} />   
    })
  
        return (

       <div className="film-list">
         <h1 className="section-title">{this.props.filmName}</h1>
        {allFilms}
      </div>
        );
    }
}