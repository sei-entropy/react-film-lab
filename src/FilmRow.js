import React from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

export default class FilmRow extends React.Component {
    render() {
        const movieYear = new Date(this.props.year);
        return <div className="film-row" onClick={this.props.handleDetailsClick}>
            <FilmPoster posterPath={this.props.posterPath}/>
            <div className="film-summary">
                <h1>{this.props.title}</h1>
                <p>{movieYear.getFullYear()}</p>
            </div>
            <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
        </div>;
    }

    handleDetailsClick = (film) => {
        console.log('Fetching details for', film);
    };
}