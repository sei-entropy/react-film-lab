import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
export default class FilmRow extends React.Component{

  handleDetailsClick (film){
    console.log( "Fetching details for "+ film.title);
 }
  

render() {
    const posterUrl = this.props.imgUrl+ this.props.film.poster_path;
    const title = this.props.film.title;
    const releaseDate = new Date(this.props.film.release_date);
    const releaseYear = releaseDate.getFullYear();
    return (
      <div onClick={() => this.handleDetailsClick(this.props.film)} className="film-row">
        <FilmPoster posterUrl={posterUrl} title={title} />

        <div className="film-summary">
        <Fave onFaveToggle={() => this.props.onFaveToggle(film)} />
          <h1>{title}</h1>
          <p>{releaseYear}</p>
        </div>
      </div>
    );
  }
}
