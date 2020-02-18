import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App() {
  return (
    <div className="film-library">
    <FilmListing movies={TMDB}/>
    <FilmDetails movies={TMDB}/>
   </div>
);}

export default App;
