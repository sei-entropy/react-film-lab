import React, {Component} from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component{
  render(){
    const allFilms = this.props.movies.films.map((item, index) => {
        return <FilmRow film={item} key={index}/>
    })

    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            {allFilms}
        </div>
    );
  }
}
export default FilmListing;

