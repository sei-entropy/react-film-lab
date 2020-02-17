import React from 'react';
import TMDB from './TMDB.js'
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import './App.css';

export default class App extends React.Component { 
  render() 
  { 


    return <div className='film-library'>   
      < FilmListing films={ TMDB.films } />
    <FilmDetails films={ TMDB.films } />
    </div>
  }
}