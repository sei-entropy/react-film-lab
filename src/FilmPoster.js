import React from 'react';

class FilmPoster extends React.Component {

    render() { 
        const { path} = this.props;
        return ( 

        <img src={"https://image.tmdb.org/t/p/w780/" + path} alt="title" /> 
        );
    }
}

export default FilmPoste
 