import React from 'react';
import FilmRow from './FilmRow';


export default class FilmListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }



        handleFilterClick = (filter) => {

            console.log('setting filter to ' + filter);
        }

        this.setState({ filter: filter })

    };

    render() {

        const allFilms = this.props.movies.films.map((mov, i) => {

            return <FilmRow film={mov} key={i} />

        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">


                    <div className="film-list-filter">

                        <div onClick={() => this.handleFilterClick('all')}></div>


                        ALL
                <span className="section-count">{this.props.films.length}</span>
                    </div>

                    <div onClick={() => this.handleFilterClick('faves')}></div>

                    <div className="film-list-filter">
                        FAVES
                <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    };
};
