import React from 'react';
import FilmPoster from './FilmPoster';

export default class FilmRow extends React.Component {

    render(){
        return(
            <div className="film-row">
                {/* Calling the FilmPoster component and passing the poster path as a prop to concat it with full path */}
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                    {/* Displaying film's title */}
                    <h1>{this.props.film.title}</h1>
                    {/* Extracting & displaying film's release year */}
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
            </div>
        );
    };
}