import React from 'react';
import './App.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import axios from "axios"

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if(filmIndex === -1) {
      console.log(`Adding ${film.title} to faves..`);
      faves.push(film);
    }
    else {
      console.log(`Removing ${film.title} from faves..`);
      faves.splice(filmIndex, 1);
    }
    // The is exactly the same as this.setState({faves: faves})
    this.setState({faves})
  }

  // A function which mainly displays the title of the film on the console
  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    });
  };

  render() {
    return ( 
      // <div className = "film-library" >
      //   {/* Calling components and passing imported films as props */}
      //   <FilmListing films={tmdbFilms} />
      //   <FilmDetails films={tmdbFilms} />
      // </div>
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
        <FilmDetails films={this.state.films} film={this.state.current}/>
      </div>
    );
  };
}