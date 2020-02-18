import React from 'react';
import FilmPoster from './FilmPoster'
export default class FilmRow extends React.Component{
  

render() {
    const posterUrl = this.props.imgUrl+ this.props.film.poster_path;
    const title = this.props.film.title;
    const releaseDate = new Date(this.props.film.release_date);
    const releaseYear = releaseDate.getFullYear();
    return (
      <div className="film-row">
        <FilmPoster posterUrl={posterUrl} title={title} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{releaseYear}</p>
        </div>
      </div>
    );
  }
}
