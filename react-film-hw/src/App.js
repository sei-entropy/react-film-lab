import React from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';


export default class App extends React.Component{
  render(){
  return (
    <div className="film-library">
    <FilmListing movies={TMDB}/>
    <FilmDetails movies={TMDB}/>

   </div>
);}
  }
