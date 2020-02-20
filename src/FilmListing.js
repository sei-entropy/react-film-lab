import React from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: 'all'
        }
        this.handleFilterClick = this.handleFilterClick.bind(this)
    }
    handleFilterClick(filter) {
        console.log('Setting filter to', filter)
        this.setState({
            filters: filter

        })

    }


    render() {
        // const faves = this.props.
        // con
        const show = []
        const allFilms = this.props.films.map((film) => {
            return (
                <FilmRow
                    film={film}
                    key={film.id}
                    onFaveToggle={() => this.props.onFaveToggle(film)}
                    handleDetailsClick={this.props.handleDetailsClick()}
                    isFave={this.props.faves.includes(film)} />

            )
        })
        const allFaves = this.props.faves.map((film) => {
            return (
                <FilmRow
                    film={film}
                    key={film.id}
                    onFaveToggle={() => this.props.onFaveToggle(film)}
                    handleDetailsClick={this.props.handleDetailsClick()}
                    isFave={this.props.faves.includes(film)} />
            )
        })

        this.state.filters === 'all' ? show = allFilms : show = allFaves





        return (

            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div
                        onClick={() => this.handleFilterClick('all')}
                        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                    >
                        <span> ALL </span>

                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div
                        onClick={() => this.handleFilterClick('faves')}
                        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}

                    >
                        <span > FAVES </span>
                        <span className="section-count">0</span>
                    </div>
                </div>

                {show}



            </div>
        )

    }

}