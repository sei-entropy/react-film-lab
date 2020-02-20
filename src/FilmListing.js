import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          filter: 'all',
        };
    }

    render() {
        const allFilms = this.props.films.map((film, index) =>
        {return  <FilmRow key={index}
                     title={film.title}
                     posterPath={film.poster_path}
                     year={film.release_date}
                     onFaveToggle={() => this.props.onFaveToggle(film)}
                     isFave={this.props.faves.includes(film)}/>});
        return (<div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={"film-list-filter " + (this.props.filter === 'all' ? 'is-active' : '')} onClick={() => this.props.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className={"film-list-filter " + (this.props.filter === 'faves' ? 'is-active' : '')} onClick={() => this.props.handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>);
    }
}