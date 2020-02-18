import React from "react";
import FilmList from "./FilmList.jsx";
import FilmDetails from "./FilmDetails.jsx";
import TMDB from "./TMDB.jsx";

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
