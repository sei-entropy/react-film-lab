//TODO in Part4 need network to install things,
// Axios API  || npm install axios or use fetch?
// dotenv API Key file || npm install --save dotenv

import React from 'react';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';
import './App.css';

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
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    // this.setState({ current: film })

    fetch(url).then(response => response.json()).then(data => {
      if (data.error_message) {
        throw new Error(data.error_message);
      }
      this.setState({ current: data })
    }).then(null, error => {
      alert(error)
    });

  }

  render() {
    return (
      <div className='film-library'>
        <FilmListing
          handleDetailsClick={this.handleDetailsClick}
          movies={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle} />
        <FilmDetails
          film={this.state.current} />
      </div>
    )
  }
}