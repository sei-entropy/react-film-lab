import React from 'react';
import './App.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

export default class App extends React.Component {

  render() {
    // Reading tmdb films
    const tmdbFilms = TMDB.films;
    return ( 
      <div className = "film-library" >
        {/* Calling components and passing imported films as props */}
        <FilmListing films={tmdbFilms} />
        <FilmDetails films={tmdbFilms} />
      </div>
    );
  };
}