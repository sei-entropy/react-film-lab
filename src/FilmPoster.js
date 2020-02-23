import React from "react";

function FilmPoster(){
    return (
      //  main div for the image, it gets the information
      //  from the parent props
      <div>
        <img src={props.posterUrl} alt={props.title} />
      </div>
    );
}