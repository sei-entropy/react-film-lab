import React from 'react';


//T2s2 Replace the class/extends with a function
export default function FilmDetails(props) {

  
  //T3s1 add img URLs
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
  //T3s3 declared var   
  let details
  //check if there's an id property on the film prop passed in to FilmDetail
  if (props.film.id) {
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" />
        <h1 className="film-title">{props.film.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{props.film.tagline}</h2>
        <p className="film-detail-overview">
          <img src={posterUrl} className="film-detail-poster" alt={props.film.title} />
          {props.film.overview}
        </p>
      </div>
    </div>
  }




  //T3s2 The empty scenario
  else {

    detail = <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  }
  return (
    <div className="film-details">

      <h1 className="section-title">Details</h1>
      {detail}
    </div>
  )
}
