import React from 'react'
import TMDB from './TMDB'
import FilmPoster from './FilmPoster'

export default class FilmRow extends React.Component {
    render() {
        const years = new Date(this.props.film.release_date)

        return (
            <div className="film-row">
               
           <FilmPoster posterPath={this.props.film.poster_path} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{years.getFullYear()}</p>
                </div>
            </div>

        )
    }
}