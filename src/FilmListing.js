import React from 'react';
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component {
    render() {
        const allFilms = this.props.films.map((film, index) => <FilmRow key={index}
        title={film.title} posterPath={film.poster_path} year={film.release_date}/>);
        return (<div className={'film-list'}>
            <h1 className={'section-title'}>FILMS</h1>
            {allFilms}
        </div>);
    }
}