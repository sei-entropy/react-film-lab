import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';


export default class App extends Component {
  render() {
    const films = TMDB.films;
    return (

      <div className="film-library">
        < FilmListing films={films} />

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );

    // <div>
    //   <TMDB title={TMDB.films}></TMDB>
    // </div>
  }
}