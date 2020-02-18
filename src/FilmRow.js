import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'


export default class FilmRow extends React.Component {

    handleFilterClick = (film) => {
        console.log('Setting filter to')
    }
    render() {
        const years = new Date(this.props.film.release_date)

        return (
            <div className="film-row" onClick={() => this.handleFilterClick()} >
                <FilmPoster posterPath={this.props.film.poster_path} />

                <div className="film-summary">
                    < Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{years.getFullYear()}</p>
                </div>
            </div>

        )
    }
}