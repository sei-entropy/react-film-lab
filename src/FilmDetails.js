import React from 'react';

class FilmDetails extends React.Component{


    render(){

        const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
        const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`


        return  (<div className="film-details">
        <h1 className="section-title">Details</h1>
        {detail}
      </div>)}
    }





export default FilmDetails;