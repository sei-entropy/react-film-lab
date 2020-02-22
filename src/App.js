import React, { Component } from "react";
import axios from "axios"
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";


import TMDB from "./TMDB";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
  }



  handleFaveToggle = film => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);

    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} From Favors`);
    } else {
      faves.push(film);
      console.log(`Adding ${film.title} To Favors`);
    }

    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })



    this.setState({ faves });
  };

  handleDetailsClick = film => {
    this.setState({ current: film });
    console.log(film);
  };

  render() {
    return (
      <div className="film-library">


        <FilmListing
          handleDetailsClick={this.handleDetailsClick}
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
        />

        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;