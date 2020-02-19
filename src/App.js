import React from 'react';
import './App.css';

import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './filmDetails'


export default class App extends React.Component {
 
  
  render() {

    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails />

      </div>
    )
  }
}

