import React from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

import "./App.css";

function App() {
  return (
    <div className="film-library">
      <FilmList films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </div>
  );
}

export default App;
