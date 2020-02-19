import React from 'react'
import FilmListing from "./Film-list";
import Fave from "./Fave";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends React.Component{
    constructor(props) {
        super(props);

    }
    handleDetailsClick = (film) => {
        console.log("Fetching details for",film)
    };
render() {

            const year = new Date(this.props.films.release_date);
    return (
        <div onClick={()=>this.handleDetailsClick(this.props.films.title)} className="film-row">

            <FilmPoster films={this.props.films}></FilmPoster>
            <div className="film-summary">
                <h1>{this.props.films.title}</h1>
                <p>{year.getFullYear()}</p>

            </div>
                    <Fave></Fave>
        </div>
    );
}
}