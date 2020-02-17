import React from "react";
import FilmRow from "./FilmRow";

class FilmListing extends React.Component {
    render() {
        const allFilms = this.props.films.map(film => {
            return <FilmRow key={film.id} film={film} />;
        });

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;
