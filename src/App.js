import React from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},

    }
  }

  handleFaveToggle = (film) => {
    const faves = [...this.state.faves], filmIndex = faves.indexOf(film)

    if (filmIndex !== -1) { faves.splice(filmIndex, 1); }
    else { faves.push(film); }

    this.setState({ faves })
  }

  handleDetailsClick = (film) => {
    this.setState({ current: film })
  }

  render() {
    return (
      <div className='App' >
        <div className='film-library'>
          <FilmListing
            handleDetailsClick={this.handleDetailsClick}
            movies={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle} />
          <FilmDetails
            film={this.state.current} />
        </div>
      </div>
    )
  }
}