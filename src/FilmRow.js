import React from 'react';
import FilmPoster from "./FilmPoster";

export default class FilmRow extends React.Component {
    render() {
        const movieYear = new Date(this.props.year);
        return <div className="film-row">
            <FilmPoster posterPath={this.props.posterPath}/>
            <div className="film-summary">
                <h1>{this.props.title}</h1>
                <p>{movieYear.getFullYear()}</p>
            </div>
        </div>;
    }
}