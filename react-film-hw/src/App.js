import React from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB,
      faves: [],
      current: {}
    }
  }

  handleFaveToggle = (film) => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film)

    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} From Favors`)
    }
    else {
      faves.push(film);
      console.log(`Adding ${film.title} To Favors`)
    }
    this.setState({ faves })
  }

  handleDetailsClick = (film) => {
    this.setState({ current: film })
    console.log(film)
  }


  render() {
    return (
      <div className="film-library">
        <FilmListing handleDetailsClick={this.handleDetailsClick} movies={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
        <FilmDetails film={this.state.current} />
      </div>

    );
  }
}

