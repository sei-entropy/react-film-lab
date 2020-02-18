import React from 'react';

export default class FilmPoster extends React.Component {
    render(){
        return(
            // Concatenate each film's poster url with its prefix
            <img src={'https://image.tmdb.org/t/p/w780/'+this.props.poster} alt="" />
        )
    }
}