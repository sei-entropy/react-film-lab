import React from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all"
        };
    }

    handleFilterClick = filter => {
        this.setState({ filter: filter });
    };



    render() {

        let show = []
        let allFilms = this.props.films.map((film) => (

            <FilmRow
                film={film}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)}
                handleDetailsClick={this.props.handleDetailsClick}
                isFave={this.props.faves.includes(film)} />


        ));

        let favesFilms = this.props.faves.map((film, index) => {
            return (
                <FilmRow
                    handleDetailsClick={this.props.handleDetailsClick}
                    film={film}
                    key={index}
                    isFave={this.props.faves.includes(film)}
                    onFaveToggle={() => this.props.onFaveToggle(film)}
                />
            );
        });

        this.state.filter === "all"
            ? (show = allFilms)
            : (show = favesFilms);




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
                        <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>

                {show}



            </div>
        )

    }

}