import React from 'react';
import FilmPoster from './FilmPoster.js'


export default class FilmRow extends React.Component { 
  render() 
  { 

    const year = new Date(this.props.year_relase)
    const date= year.getFullYear()

    return <div className="film-row">
  <FilmPoster poster={this.props.poster}/>

    <div className="film-summary">
      <h1>{this.props.title}</h1>
      <p>{date}</p>
    </div>
  </div>
  }
}