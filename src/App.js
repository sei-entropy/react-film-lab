import React from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';
class App extends React.Component{

  render(){


  return (
    <div className="film-library">

  <div className="film-list">
  <FilmListing  filmTital={TMDB.films}/>
     <h1 className="section-title">FILMS</h1>
     
     
  </div>

  <div className="film-details">
       <FilmDetails  filmDetails={TMDB.films}/>
       <h1 className="section-title">DETAILS</h1>
       
       </div>

</div>
  )
  }//end render

}//end class App

export default App;
