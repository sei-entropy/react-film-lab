import React from 'react';
import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB';

import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';


export default class App extends React.Component {

  render() {

    return (
      <div className="film-library">
      <FilmListing movies={TMDB} />
    <FilmDetails movies={TMDB} />
      
      </div>

    );
  };
};

