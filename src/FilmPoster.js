import React from 'react';
//T2s1 Replace the class/extends with a function

export default function FilmPoster(props) {

  return (
    //  main div for the image, it gets the information
    //  from the parent props
    <div>
      <img src={props.posterUrl} alt={props.title} />
    </div>
  );
}
