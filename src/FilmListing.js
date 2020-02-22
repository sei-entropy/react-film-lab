import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'all'
        };
    }




    handleFilterClick = (filter) => {
        const text = "Setting filter to";
        this.setState = filter
        return (
            console.log(text + filter)

        )
    }

    render() {

        const getImg = "https://image.tmdb.org/t/p/w780";
        const allFilms = this.props.films.map((film, index) => (
            <FilmRow key={film.id} getImg={getImg} film={film} />
        ));



        let showFilms = [];

        const favesFilms = this.props.faves.map((film, index) => {
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
            ? (showFilms = allFilms)
            : (showFilms = favesFilms);


        return (

            <div className="film-list" >
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    {/* <div className="film-list-filter" onClick={() => this.handleFilterClick('all')} > */}
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
                    <span className="section-count">{this.props.films.length}</span>
                    </div>
                    {/* <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}> */}
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                    <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
                {showFilms}
            </div>



        );
    }
}
