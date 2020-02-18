import React from "react";
import FilmList from "FilmList.jsx";
import FilmDetails from "FilmDetails.jsx";

import "./App.css";

function App() {
  return (
    <div className="film-library">
      <FilmList />
      <FilmDetails />
    </div>
  );
}

export default App;
