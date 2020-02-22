import React from 'react';
import axios from 'axios';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

export default class App extends React.Component {
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
    } else {
      faves.push(film);
    }
    this.setState({ faves });
  };

  handleDetailsClick = film => {
    console.log("Fetching details for : " + film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    axios({
      method: 'GET',
      url: url
    })
      .then(res => {
        this.setState({ current: res.data })
      })
      this.setState({
        current: film,
    });
  }
  render() {
    return (
    <div className="film-library">
      
    <FilmListing 
    handleDetailsClick={this.handleDetailsClick}
      movie={TMDB} 
      faves={this.state.faves}
      onFaveToggle={this.handleFaveToggle} />

    <FilmDetails film={this.state.current}/>
   </div>
)
};
    }
