import React from 'react'
import FilmRow from './FilmRow.js'

export default class FilmListing extends React.Component {
    render() {
        const tmdbList = this.props.tmdb.map(film => <FilmRow key={film.id} film={film} />)
        return (
            <div className="film-list">
                <h1 className="section-title" >FILMS</h1>
                {tmdbList}
            </div>
        )
    }
}
