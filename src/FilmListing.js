import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          filter: 'all',
        };
    }

    handleFilterClick = (filter)  => {
        this.setState({
            filter: filter,
        });
        console.log('Setting filter to', filter);
    };

    render() {
        const allFilms = this.props.films.map((film, index) => <FilmRow key={index}
                     title={film.title}
                     posterPath={film.poster_path}
                     year={film.release_date}
                     onFaveToggle={() => this.props.onFaveToggle(film)}
                     isFave={this.props.faves.includes(film)}
                     handleDetailsClick={() => this.props.handleDetailsClick(film)}/>);

        const allFaves = this.props.films.filter((film, index) => {
            if(this.props.faves.includes(film))
                return true
        });

        const allFilmsFaves = allFaves.map((film, index) => <FilmRow key={index}
                                                                            title={film.title}
                                                                            posterPath={film.poster_path}
                                                                            year={film.release_date}
                                                                            onFaveToggle={() => this.props.onFaveToggle(film)}
                                                                            isFave={this.props.faves.includes(film)}
                                                                            handleDetailsClick={() => this.props.handleDetailsClick(film)}/>);


        return (<div className="film-list">

            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={"film-list-filter " + (this.state.filter === 'all' ? 'is-active' : '')} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className={"film-list-filter " + (this.state.filter === 'faves' ? 'is-active' : '')} onClick={() => this.handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>

            {this.state.filter === 'all' ? allFilms : allFilmsFaves}
        </div>);
    }
}