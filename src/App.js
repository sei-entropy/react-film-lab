import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
export default class App extends React.Component {
  render(){

    return (
< div className = "film-library" >
<FilmListing Film={TMDB.films}/>
<FilmDetails film={TMDB}/>
</div>
    )}
    
}
