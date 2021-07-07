import React from 'react';
import FilmRow from './film-row';

export default class FilmList extends React.Component{
    render(){
        const getImg = "https://image.tmdb.org/t/p/w780";

     let allFilms = this.props.films.map(function(film){
            return  <FilmRow film={film} getImg={getImg} key={film.id} />
                       
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