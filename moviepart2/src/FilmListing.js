import React, { Component } from "react";
// import the FilmRow child component
import FilmRow from "./FilmRow";

export default class FilmList extends Component {
 constructor(props){

super(props);
this.state = {
    filter: 'all',
};
}

handleFilterClick = (filter) => {

this.setState  ({
    filter: filter,
});
console.log("Setting filter to",filter)
};




    
  render() {
    //  Create a constant variable holding the pre-string
    //  for the database image url
    const getImg = "https://image.tmdb.org/t/p/w780";

    //  Create a constant variable array holding Film Row components
    //  it creates components by mapping through the films array from
    //  props then pass the props to FilmRow Child component
    const allFilms = this.props.films.map((film, index) => {
        <FilmRow key={film.id} getImg={getImg} film={film} />
    });
  
    return (
      // Main div for the film listing, with films h1 tag under it
      <div className="film-list"/>
        <h1 className="section-title">FILMS</h1>
        /* All films components array */
        <div className="film-list">
    <h1 className="section-title">FILMS</h1>

    <div className="film-list-filters">
    <div onClick={() => this.handleFilterClick('all')} className={"film-list-filter "+(this.state.filter === 'all' ? 'is-active' : '')}>
                        ALL
    <span className="section-count">{this.props.films.length}</span>
                    </div>
     <div onClick={() => this.handleFilterClick('faves')} className={"film-list-filter "+(this.state.filter === 'faves' ? 'is-active' : '')}>
                        FAVES
             <span className="section-count">0</span>
                    </div>
             </div>

        {allFilms}
      </div>
  
     ) } }
