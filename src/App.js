import React, { Component } from 'react';
import TMDB from './TMDB.js'
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      films : TMDB.films, 
      faves: [], 
      current : { }, 
      isFave : false,
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  
  

  handleFaveToggle = (film) => { 
    const faves = this.state.faves.slice() ;
    const filmIndex = faves.indexOf(film); 

    if ( filmIndex >= 0 ) { 
      console.log (`Removing ${ film } from faves `) 
    }
    else { 
      console.log (`addind ${ film } to the faves`)
    }
   
    this.setState({ faves 
    }) // call for the change to happen . . .
  
  }
  
  render() 
  { 


    return  (
    <div className="App" >
      <div className='film-library'>   
      < FilmListing films={ this.state.films } 
      faves={this.state.faves} />
      
    <FilmDetails films={ this.state.films } />
    </div>
    </div>
    )
  }
}