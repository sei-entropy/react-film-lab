import React, { Component } from 'react';
import axios from "axios"; //
//import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB';

import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      /* T1S2 */
      films: TMDB.films,
      faves: [],
      current: {}

    };
  }
  /* T2s5 add bind */
  /*     this.handleFaveToggle = this.handleFaveToggle.bind(this)
   */

  /* T2s4 define () */
  handleFaveToggle = (film) => {
    /* T2s6 make a copy and store in var */
    const faves = this.state.faves.slice();

    /* T2s7 find index of passed film */
    const filmIndex = faves.indexOf(film);

    /* T2s8 conditiona for add or remo film */
    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);/* T2s9 remov from arr */
      console.log(`removing ${film.title}to faves`)

    } else {
      faves.push(film);/* T2s9 add new to arr */
      console.log(`Adding ${film.title}to faves`)

    }/* T2s10 update state */
    this.setState({ faves })

  }



  handleDetailsClick = film => {

    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })
  }



    render() {

      return (

        // Create a div to hold the film library
        <div className="film-library">
          {/* Add the two child components and pass the films
        from the database as props */}
          {/* T1s3 */}
          <FilmListing
            handleDetailsClick={this.handleDetailsClick}
            films={this.state.films}
            faves={this.state.faves}
            /* T2s11 Pass the handleFaveToggle function to FilmListing through props */
            onFaveToggle={this.handleFaveToggle}
          />

          <FilmDetails film={this.state.current} />
          {/* T1s3 */}
        </div>

      );
    };
  };

