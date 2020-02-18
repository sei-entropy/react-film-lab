import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'


export default class FilmRow extends React.Component {
    handleFilterClick = (film) => {
        console.log("Fetching details for: ", film);
    }
    render(){
        const movieYears = new Date(this.props.film.release_date);

        return(

            <div className="film-row" onClick={ () => this.handleFilterClick(this.props.film.title)}>

                <FilmPoster film={this.props.film}/>
            
                <div className="film-summary">
                <Fave/>
                <h1>{this.props.film.title}</h1>
                <p>{ movieYears.getFullYear()}</p>
                </div>
            </div>
        );
    }
}

