import React from 'react'
import FilmListing from "./Film-list";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends React.Component{
    constructor(props) {
        super(props);

    }
render() {

            const year = new Date(this.props.films.release_date);
    return (
        <div className="film-row">

            <FilmPoster films={this.props.films}></FilmPoster>
            <div className="film-summary">
                <h1>{this.props.films.title}</h1>
                <p>{year.getFullYear()}</p>

            </div>
        </div>
    );
}
}