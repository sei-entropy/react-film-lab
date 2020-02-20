import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {

  constructor(props){
     super(props)
     
this.state={films:TMDB.films,
faves:[],
current:{}

}
this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  handleFaveToggle=(Film)=>{
    const filmIndex=0;
    filmIndex=(this.state.faves).indexOf(Film)
    if ((this.state.faves [filmIndex]).includes(Film))
    (this.state.faves).pop()
    else 
    (this.state.faves).push(Film)
  
  
  
  }


  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={TMDB.films} />
          <FilmDetails films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;