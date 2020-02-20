import React from 'react';
import './App.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

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
  handleDetailsClick = () => {
      console.log('Fetching details for', this.state.current);
  }

  render() {
    // Reading tmdb films
    const tmdbFilms = TMDB.films;
    return ( 
      // <div className = "film-library" >
      //   {/* Calling components and passing imported films as props */}
      //   <FilmListing films={tmdbFilms} />
      //   <FilmDetails films={tmdbFilms} />
      // </div>
      <div className="App" >
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
        <FilmDetails films={this.state.films} film={this.state.current}/>
      </div>
    </div>
    );
  };
}