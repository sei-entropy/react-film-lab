import React, { Component } from 'react';
import TMDB from './TMDB.js'
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import './App.css';
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      films : TMDB.films, 
      faves: [], 
      current : { }, 

    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  
  

  handleFaveToggle = (film) => { 
    const faves = [...this.state.faves] ;
    const filmIndex = faves.indexOf(film); 

    if ( filmIndex !== -1 ) { 
      faves.splice(filmIndex, 1);
      console.log (`Removing ${ film.title } from faves `) 
    }
    else { 
      faves.push(film)
      console.log (`addind ${ film.title } to the faves`)
    }
   
    this.setState({ faves 
    }) // call for the change to happen . . .
  
  }

  handleDetailsClick = (film) => {
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
   
    axios({
        method: 'get',
        url: url
    })
        .then(res => {
           

            this.setState({current: res.data});
        })
        .catch(err => {
            console.log('ERROR: ', err);
        });
};



  render() 
  { 


    return  (
    
      <div className='film-library'>   
      < FilmListing
             handleDetailsClick={this.handleDetailsClick}
             films={this.state.films}
             faves={this.state.faves}
             onFaveToggle={this.handleFaveToggle}
             />
      
    <FilmDetails film={ this.state.current } />
    </div>
  
    )
  }
}