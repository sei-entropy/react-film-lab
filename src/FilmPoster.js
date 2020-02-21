import React from 'react';

function FilmPoster(props) {


    return <img src={`https://image.tmdb.org/t/p/w780/${props.posterPath}`} alt=" " />

}

export default FilmPoster;