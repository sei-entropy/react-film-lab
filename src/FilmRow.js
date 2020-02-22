import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';


export default function FilmRow(props) {
    const title = props.film.title;
    return(
        <div className="film-row" onClick={()=>props.handleDetailsClick(props.film)}>
            {/* Calling the FilmPoster component and passing the poster path as a prop to concat it with full path */}
            <FilmPoster poster={props.film.poster_path} title={title}/>
            <div className="film-summary">
                {/* Calling Fave component to display the icon */}
                <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
                {/* Displaying film's title */}
                <h1>{title}</h1>
                {/* Extracting & displaying film's release year */}
                <p>{new Date(props.film.release_date).getFullYear()}</p>
            </div>
        </div>
    );
}