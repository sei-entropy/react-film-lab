import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails.js";
import FilmListing from "./FilmListing.js";
import TMDB from "./TMDB.js";
import Fave from "./Fave";
import FilmRow from "./FilmRow";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
      isFave:false,
     
      
      
    };
    
  
    
    
  }
  handleFaveToggle = films => {
    console.log(films);
    const faves = this.state.faves.slice();
    const filmIndex = this.state.faves.indexOf();
  };
  onFaveToggle = () => {
  return <Fave isFave={this.state.isFave}/> 
  };
  render() {
    
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
          />

          <FilmDetails films={this.state.films} current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
