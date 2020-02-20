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

    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  handleFaveToggle = (film) => {

    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)

    if (filmIndex > -1) {
      faves.splice(filmIndex, 1);

      console.log('Removing reom faves' + film.title)
    } else {

      faves.push(film);

      console.log('Adding to faves' + film.title)
    }

    this.setState({
      faves
      // The above is exactly the same as this.setState({faves: faves})
    })

  }
  handleDetailsClick = (film) => {
    this.setState({ current: film })
  }

  render() {


    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB.films}
            faves={this.state.faves}
            handleDetailsClick={this.handleFaveToggle} />
          <FilmDetails film={this.state.current} />

        </div>
      </div>
    )
  }
}

