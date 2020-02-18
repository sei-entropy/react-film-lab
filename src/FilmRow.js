import React from 'react';
import FilmPoster from './FilmPoster.js'
import Fave from './Fave.js'


export default class FilmRow extends React.Component { 
  handleDetailsClick = (film) => { 
    console.log ('Fetching details',this.props.title)


  }
  
  
  
  render() 
  { 

    const year = new Date(this.props.year_relase)
    const date= year.getFullYear()

    return <div className="film-row" onClick={this.handleDetailsClick}>
  <FilmPoster poster={this.props.poster}/>

    <div className="film-summary">
      <h1>{this.props.title}</h1>
      <p>{date}</p>
      <Fave />
    </div>
  </div>
  }
}