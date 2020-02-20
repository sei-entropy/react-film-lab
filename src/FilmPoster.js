import React from 'react';


export default function render(props) {
    return (
        <img src={'https://image.tmdb.org/t/p/w780/' + props.posterPath} alt="" />
    );
}
