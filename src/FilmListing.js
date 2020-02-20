import React from 'react'
import FilmRow from './FilmRow.js'

export default class FilmListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filter: 'all' }
    }

    handleFilterClick = (filter) => { this.setState({ filter: filter }) }

    render() {

        let showFilms = [];

        const filmsList = this.props.movies.map(film => <FilmRow
            film={film}
            key={film.id}
            isFave={this.props.faves.includes(film)}
            onFaveToggle={() => this.props.onFaveToggle(film)}
            handleDetailsClick={this.props.handleDetailsClick} />)

        const filmsFavesList = this.props.faves.map(film => <FilmRow
            film={film}
            key={film.id}
            isFave={this.props.faves.includes(film)}
            onFaveToggle={() => this.props.onFaveToggle(film)}
            handleDetailsClick={this.props.handleDetailsClick} />)

        this.state.filter === 'all' ? showFilms = filmsList : showFilms = filmsFavesList

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                        onClick={() => this.handleFilterClick('all')}>
                        ALL <span className="section-count">{this.props.movies.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                        onClick={() => this.handleFilterClick('faves')}>
                        FAVES <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>
                {showFilms}
            </div>
        )
    }
}