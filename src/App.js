import React, { Component } from "react";
// import the child components
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
// import the film database
import TMDB from "./TMDB";
// import the style
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
      isFave: false,
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleFaveToggle = filmName => {
    //make a copy and store in the varible fave
    const faves = faves.slice();
    const filmsIndex = faves.indexOf(filmName);

    if (filmsIndex >= 0) {
      console.log(`Removing ${filmName} from faves`);
    } else {
      console.log(`adding ${filmName} to the faves`);
    }
    this.setState({
      // exactly the same as faves: faves
      faves
    });
  };
  render() {
    return (
      // Create a div to hold the film library
      <div className="App">
        <div className="film-library">
          {/* Add the two child components and pass the films
       from the database as props */}

          <FilmListing films={this.state.films} faves={this.state.faves} />
          <FilmDetails films={this.state.films} />
        </div>
      </div>
    );
  }
}
export default App;
