import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';


export default class FilmRow extends React.Component {

    // A function which mainly displays the title of the film on the console
    handleDetailsClick = (title) => {
        console.log('Fetching details for',title);
    }

    render(){
        const title = this.props.film.title;
        return(
            <div className="film-row" onClick={()=>this.handleDetailsClick(title)}>
                {/* Calling the FilmPoster component and passing the poster path as a prop to concat it with full path */}
                <FilmPoster poster={this.props.film.poster_path} title={title}/>
                <div className="film-summary">
                    {/* Calling Fave component to display the icon */}
                    <Fave />
                    {/* Displaying film's title */}
                    <h1>{title}</h1>
                    {/* Extracting & displaying film's release year */}
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
            </div>
        );
    };
}