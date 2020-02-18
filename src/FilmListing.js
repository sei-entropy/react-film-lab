import React from 'react';
import TMDB  from './TMDB';
import FilmRow from './FilmRow';
export default class FilmListing extends React.Component {
render(){
    let allFilms = this.props.MyFilms.map((film, index) => {
        return <FilmRow Film = {film} key = {index} />
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