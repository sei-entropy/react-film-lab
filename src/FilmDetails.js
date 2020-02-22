import React from 'react'

export default class FilmDetails extends React.Component {
    render() {
        const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.film.backdrop_path}`
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const hasFilmSelected = (key) => {
            switch (key) {
                case undefined:
                    return (
                        <div className="film-detail">
                            <p>
                                <i className="material-icons">subscriptions</i>
                                <span>No film selected</span>
                            </p>
                        </div>
                    )
                case this.props.film.id:
                    return (
                        <div className="film-detail is-hydrated">
                            <figure className="film-backdrop">
                                <img src={backdropUrl} alt="" />
                                <h1 className="film-title">{this.props.film.title}</h1>
                            </figure>

                            <div className="film-meta">
                                <h2 className="film-tagline">{this.props.film.tagline}</h2>
                                <p className="film-detail-overview">
                                    <img src={posterUrl} className="film-detail-poster" alt={this.props.film.title} />
                                    {this.props.film.overview}
                                </p>
                            </div>
                        </div>
                    )
                default:
                    return (
                        <div className="film-detail">
                            <p>
                                <span>Something wrong happened ...</span>
                            </p>
                        </div>
                    )
            }
        }

        return (
            <div className='film-details'>
                <h1 className='section-title'>DETAILS</h1>
                {hasFilmSelected(this.props.film.id)}
            </div>
        )
    }
}
