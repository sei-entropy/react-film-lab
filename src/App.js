  
import React from "react";
// import the child components
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

// import the film database
import TMDB from "./TMDB";
// import the style
import "./App.css";

function App() {
  return (
    // Create a div to hold the film library
    <div className="film-library">
      {/* Add the two child components and pass the films
       from the database as props */}

      <FilmListing films={TMDB.films} />

      <FilmDetails films={TMDB.films} />
    </div>
  );
}
export default App;