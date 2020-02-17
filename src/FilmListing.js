import React from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends React.Component {

    render(){
        // passing each film's film_id as a key and the film itself to display them as a row
        const allFilms = this.props.films.map((film)=>{
            return <FilmRow key={film.id} film={film} />
        });

        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {/* Displaying the films */}
                <h1>{allFilms}</h1>
            </div>
        )
    }
}