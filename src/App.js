import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails'

export default class App extends React.Component{
  render(){
    return (<div className="film-library">
    <div>
      <FilmListing/>
    </div>
    <div>
      <FilmDetails/>
    </div>
  
    
  </div>);
  }
}


