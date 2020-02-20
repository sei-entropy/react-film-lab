import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'


export default class FilmRow extends React.Component {


    render() {
        const years = new Date(this.props.film.release_date)

        return (
            <div className="film-row" onClick={() => this.props.onDetailsClick(this.props.film)}>
                <FilmPoster posterPath={this.props.film.poster_path} />

                <div className="film-summary">
                    < Fave onFaveToggle={this.props.onFaveToggle}
                        isFave={this.props.isFave} />
                    <h1>{this.props.film.title}</h1>
                    <p>{years.getFullYear()}</p>
                </div>
            </div>

        )
    }
}