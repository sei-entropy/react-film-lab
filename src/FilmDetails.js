import React from 'react';


export default function FilmDetails(props){
        let details = <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <div className="film-detail">
            <p>
              <i className="material-icons">subscriptions</i>
              <span>No film selected</span>
            </p>
          </div>
        </div>
        // checks if there's a film id
        if(props.film.id){
          const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
          const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
          
          return(
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
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
        </div>
          )
        }else{
              
        }
    
    return (
      // Main div for the film details
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {details}
      </div>
    );
  }


  //f2562fe640dc2a2d489c50784f8aef9e
//https://api.themoviedb.org/3/movie/550?api_key=f2562fe640dc2a2d489c50784f8aef9e
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjU2MmZlNjQwZGMyYTJkNDg5YzUwNzg0ZjhhZWY5ZSIsInN1YiI6IjVlNGViMmVmYTkzZDI1MDAxMzQ0NzA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR6I7KwyyqntvzBoegQL6tOajiYpkkNNK1eqoWXQKA

// https://api.themoviedb.org/3/movie/550?api_key=f2562fe640dc2a2d489c50784f8aef9e
