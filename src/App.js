import React from 'react';
import FilmList from './film-list';
import FilmDetails from './film-details';
import TMDB from './TMDB';

export default class App extends React.Component{
  render(){

    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>
        <FilmDetails overview={TMDB.films.overview}/>
        </div>
    )
  }
}
