import React from 'react';
import TMDB  from './TMDB';
export default class FilmDetails extends React.Component {
    render() {
        return ( 
              <div className = "film-details">
  <h1 className = "section-title"> DETAILS </h1> 
        {/* <h1>{this.props.TMDB.films}</h1> */}
            </div>
        );
    }
}