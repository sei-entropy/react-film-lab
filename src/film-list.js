import React from 'react';
import FilmRow from './film-row';

export default class FilmList extends React.Component{
    render(){
     let allFilms = this.props.films.map(function(film,index){
            return <FilmRow title={film.title} key={index} />
        })
    
        return(
      <div className="film-list">
         <h1 className="section-title">FILMS</h1>
         {/* <h1>{this.props.films[0].title}</h1> */}
         <h1>{allFilms}</h1>
      </div>

     
        )
    }
}