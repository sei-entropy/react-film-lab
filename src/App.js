import React from 'react';
import './App.css';
import FilmListing from "./Film-list";
import FilmDetails from "./Film-details";
import TMDB from "./TMDB";
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {


    return (
        <div className="film-library">
          <FilmListing films={TMDB.films}></FilmListing>
          <FilmDetails></FilmDetails>


        </div>
    );
  }
}

export default App;
