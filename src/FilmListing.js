import React from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filters: 'all'
        }
    }

    handleFilterClick(filter) {
        console.log('Setting filter to',filter)
        this.setState({
            filters: filter
      
        })
    
    }
    render() {

        const allFilms = this.props.films.map((film, index) => {
            return <FilmRow key={film.id} film={film} />


        });

        return (

            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div
                        onClick={() => this.handleFilterClick('all')}
                        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
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

                {allFilms}
            </div>
        )

    }

}