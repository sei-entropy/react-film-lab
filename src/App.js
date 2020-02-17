import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';



export default class App extends React.Component{
  constructor(props){
    super(props);
    console.log(TMDB.films);
  
  }
 
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


