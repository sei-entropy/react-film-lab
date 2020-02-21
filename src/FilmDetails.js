import React from "react";

export default function render(props){
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
  let details= props.film.id;
    return (
      
      // Main div for the film details
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {details}
        <div className="film-detail">
  <p>
    <i className="material-icons">subscriptions</i>
    <span>No film selected</span>
  </p>
</div>
      </div>
    );
  
}
