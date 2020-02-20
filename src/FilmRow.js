import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';


export default class FilmRow extends React.Component {

    render(){
        const title = this.props.film.title;
        return(
            <div className="film-row" onClick={this.props.handleDetailsClick}>
                {/* Calling the FilmPoster component and passing the poster path as a prop to concat it with full path */}
                <FilmPoster poster={this.props.film.poster_path} title={title}/>
                <div className="film-summary">
                    {/* Calling Fave component to display the icon */}
                    <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
                    {/* Displaying film's title */}
                    <h1>{title}</h1>
                    {/* Extracting & displaying film's release year */}
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
            </div>
        );
    };
}