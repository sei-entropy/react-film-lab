import React from 'react';
import './App.css';
import FilmDetails from './Film-details.js';
import FilmListing from './Film-list.js';
import TMDB from './TMDB.js';

class App extends React.Component {
  state = { 
    films: TMDB.films,
    faves: [],
    current: {}
   }

  handleFaveToggle = (film) =>{
    
    const faves = this.state.faves.slice(0, this.state.faves.length);
    const filmIndex = faves.indexOf(film);
    if(filmIndex >= 0){
       
        faves.splice(filmIndex, 1);
    }

    else if(filmIndex === -1){
     
      faves.push(film);
    }
    this.setState({faves});
  }

  handleDetailsClick = (film) =>{
    this.setState({current: film});
        }

  render() { 

    return ( <div className="App">
    <div className="film-library">
        <FilmListing films={this.state.films} 
               faves={this.state.faves} 
        onFaveToggle={this.handleFaveToggle} 
        onDetailsClick={this.handleDetailsClick}/>
        <FilmDetails film={this.state.current}  />
        </div>
  </div> );
  }
}

export default App;