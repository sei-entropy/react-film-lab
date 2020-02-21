import React, { Component } from "react";
// import the child components
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
// import the film database
import TMDB from "./TMDB";
import axios from "axios" 
// import the style
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);

  }
  handleFaveToggle = film => {
    //make a copy and store in the varible fave
    const faves = [this.state.faves];
    const filmIndex = faves.indexOf(film);

    if (filmIndex !== -1) {
      faves.splice(filmIndex,1);
      console.log(`Removing ${film.title} from faves`);
    } else {
      faves.push(film);
      console.log(`adding ${film.title} to the faves`);
    }
    this.setState({
      // exactly the same as faves: faves
      faves
    });
  };
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

          <FilmListing handleDetailsClick={this.handleDetailsClick} 
          films={this.state.films}
           faves={this.state.faves}
            onFaveToggle ={this.handleFaveToggle}
             />

          <FilmDetails films={this.state.current} />
        </div>
    );
  }
}
export default App;
