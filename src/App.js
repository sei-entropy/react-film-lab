import React from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';

export default function App() {
  return (
    <div className='App'>
      <div className='film-library'>
        <FilmListing tmdb={TMDB.films} />
        <FilmDetails tmdb={TMDB.films} />
      </div>
    </div>
  );
}