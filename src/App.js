import React from 'react';
import './App.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

export default class App extends React.Component {

  // Reading TMDB file and save it in state
  constructor(props){
    super(props);

    this.state = {
      tmdbFilms: TMDB.films
    };
  };

  render() {
    return ( 
      <div className = "film-library" >
        {/* Calling components and passing imported films as props */}
        <FilmListing films={this.state.tmdbFilms} />
        <FilmDetails films={this.state.tmdbFilms} />
      </div>
    );
  };
}