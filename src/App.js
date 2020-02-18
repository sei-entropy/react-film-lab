import React from 'react';
import './App.css';
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
import Fave from './Fave.js';

function App() {
  return (
    <div className="film-library">
      <FilmListing films={TMDB.films}/>
      <FilmDetails films={TMDB.films}/>
    </div>
  );
}

export default App;
