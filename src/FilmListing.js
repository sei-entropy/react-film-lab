import React from 'react';
import FilmDetails from './FilmDetails';
import App from './App';



export default class FilmListing extends React.Component {

    render() {

        const allItems = this.props.films.map((film, index) =>
            <h1>{film.title}</h1>
        );
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allItems}
            </div>
        );
    }

}
