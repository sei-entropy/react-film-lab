import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
export default class App extends React.Component {
  render(){

    return (
< div className = "film-library" >
 
  
{/* <FilmListing film={this.props.film.title}/> */}
{/* <h1>{allFilms}</h1> */}
<FilmListing MyFilms={TMDB.films}/>
<FilmDetails Myfilm={TMDB}/>
</ div>
    )}
    
}
