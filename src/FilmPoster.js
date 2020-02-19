import React from 'react'

export default class FilmPoster extends React.Component {
    render() {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`}
                    alt={this.props.film.title} />
            </div>
        )
    }
}
