import React from 'react';
import FilmRow from './FilmRow';
export default class FilmListing extends React.Component {
render(){
    // Film From <FilmListing MyFilms={TMDB.films}/>
    let allFilms = this.props.Film.map((film, index) => {
        return <FilmRow Film = {film} key = {film.id} />
    });
    return(
        < div>
         < div className = "film-list" > 

         <h1 className = "section-title" > FILMS </h1>
          {/* <h1> {this.props.TMDB}</h1> */}
          {allFilms}
        </div>
        </ div>
    );
}
}