import React from "react";

function FilmPoster(props) {
    const { path, title } = props;
    const poster_url = "https://image.tmdb.org/t/p/w780/" + path;

    return <img src={poster_url} alt={title} />;
}

export default FilmPoster;
