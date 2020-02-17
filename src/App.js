import React from "react";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import { TMDB } from "./TMDB";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing list={TMDB.films} />
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
