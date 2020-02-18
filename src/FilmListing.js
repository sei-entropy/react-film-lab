import React from 'react'
import TMDB from './TMDB'
import FilmRow from './FilmRow'
export default class FilmListing extends React.Component {
    render() {

        const allFilms = this.props.list.map((film, index) => {
            return <FilmRow key={film.id} film={film} />

        });

        return (

            <div> {allFilms} </div>
        )

    }

}