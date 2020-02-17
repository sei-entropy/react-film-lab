import React from 'react';
import FilmRow from "./FilmRow";
export default class FilmListing extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        const allFilms = this.props.films.map(function (item,index) {
            return <FilmRow films={item} key={item.id}></FilmRow>
        });
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}