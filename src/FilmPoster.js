import React from 'react';

export default function FilmPoster(props){

    return (<div>
        <img src={props.posterUrl} alt={props.title} />
      </div>);
  
  }
  
