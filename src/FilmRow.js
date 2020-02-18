import React from 'react'
import FilmPoster from './FilmPoster.js'

export default class FilmRow extends React.Component {
    render() {
        const releaseDate = new Date(this.props.film.release_date)
        return (
            <div>
                <div className="film-row">
                    <FilmPoster film={this.props.film} />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{releaseDate.getFullYear()}</p>
                    </div>
                </div>
            </div>
        )
    }
}
