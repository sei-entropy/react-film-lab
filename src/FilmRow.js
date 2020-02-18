import React from 'react';
import TMDB from './TMDB';
export default class FilmRow extends React.Component {
render(){
    return (
        <div> 
            <h1>{this.props.Film.title}</h1>
        </div>
    );
}
}