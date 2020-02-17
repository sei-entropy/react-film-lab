import React from 'react';
import FilmPoster from './FilmPoster'


export default class FilmListing extends React.Component{
    render(){
     
        return (<div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <FilmPoster/>
        </div>

        )
    }
}
