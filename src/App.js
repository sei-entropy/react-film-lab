import React, { Component } from 'react';
import './App.css';
import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './filmDetails'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}

    };
  }
  handleFaveToggle = (film) => {

    let faves = [...this.state.faves]
    let filmIndex = faves.indexOf(film)

    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);

      console.log(`Removing ${film.title} From Favors`)
    } else {

      faves.push(film);

      console.log(`Adding ${film.title} To Favors`)
    }

    this.setState({ faves })

  }
  handleDetailsClick = (film) => {
    this.setState({ current: film })
  }

  render() {


    return (

      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
          handleDetailsClick={this.handleDetailsClick}
          onFaveToggle={this.handleFaveToggle} />

        <FilmDetails film={this.state.current} />

      </div>

    )
  }
}

