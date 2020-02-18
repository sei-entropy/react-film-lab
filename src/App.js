import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import FilmRow from "./FilmRow";

function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <FilmListing />
        <FilmRow />
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
    </div>
  );
}

export default App;
