import React, { Component } from 'react';
import './App.css';
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

  export default class App extends React.Component {

    constructor(props) {
      super(props);
      this.handleFaveToggle = this.handleFaveToggle.bind(this)
      this.state = {
        films: TMDB.films,
        faves: [],
        current: {},
      };
    }

    handleFaveToggle = (film) => {
      const faves = this.state.faves.slice();
      const filmIndex = faves.indexOf(film);

      if (filmIndex >= 0) {
        faves.splice(filmIndex, 1);
        console.log (`Removing ${ film } from faves `) 
      }
      else { 
        faves.push(film);
        console.log (`addind ${ film } to the faves`)
      }

      this.setState({faves})
    }

    handleDetailsClick = (film)=> {
      this.setState({current: film})
     }

    render(){
      return(
        <div className="film-library">
            <FilmListing films={this.state.films}
                         faves={this.state.faves}
                         handleDetailsClick={this.handleDetailsClick}
                         onFaveToggle={this.handleFaveToggle}/>
            <FilmDetails film={this.state.current}/>
        </div>
      );
    }

  }




