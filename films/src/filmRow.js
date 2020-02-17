import React from 'react';
import filmList from './filmList'
import filmDetails from './filmDetails'
import FilmPoster from './FilmPoster'


export class filmRow extends React.Component
{
render(){
const year =new Date(this.props.films.release_date)


return (<div className="film-row">
    <FilmPoster Movie={ this.props.films} alt="" />
)}
return ( <div className="film-summary">
<h1>{this.props.films.title}</h1>
    <p>{year.getFullYear()}</p>
  </div>
</div>)}}