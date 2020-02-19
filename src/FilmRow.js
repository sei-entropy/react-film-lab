import React from 'react'
import FilmPoster from './FilmPoster.js'
import Fave from './Fave.js'

export default class FilmRow extends React.Component {
    handleDetailsClick = (film) => { console.log("Fetching details for" + film) }
    render() {
        const releaseDate = new Date(this.props.film.release_date).getFullYear()
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
                <FilmPoster film={this.props.film} />
                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{releaseDate}</p>
                </div>
            </div>
        )
    }
}