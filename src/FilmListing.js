import React from 'react';
import FilmRow from './FilmRow';


export default class FilmListing extends React.Component{

    render(){
    
        const allFilms = this.props.movies.films.map((mov,i) =>{

            return <FilmRow film={mov} key={i}/>

        })

    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        {allFilms};
      </div>
    )
};
};
