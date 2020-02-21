import React, { Component } from 'react';
import './App.css';
import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './filmDetails'
import axios from "axios"


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

    let faves = this.state.faves.slice()
    let filmIndex = faves.indexOf(film)

    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} From Favors`)
    } 
    else
     {
      faves.push(film);
      console.log(`Adding ${film.title} To Favors`)
    }
    this.setState({ faves })

  }
  
  handleDetailsClick = (film) => {
    console.log("Fetching details for : " + film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    })
      .then(response => {
        console.log(response) // take a look at what you get back!
        console.log(`Fetching details for ${film.title}`);
        this.setState({ current: response.data })
      })
  }
  render() {


    return (

      <div className="film-library">
        <FilmListing
          films={TMDB.films}
          faves={this.state.faves}
          onDetailsClick={this.handleDetailsClick}
          onFaveToggle={this.handleFaveToggle} />

        <FilmDetails film={this.state.current} />

      </div>

    )
  }
}

