import React, {Component} from 'react';
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
    render(){

        const year = new Date(this.props.film.release_date);
    
        return(

            <div className="film-row">
                <FilmPoster film={this.props.film}/>
    
                <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{ year.getFullYear()}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;