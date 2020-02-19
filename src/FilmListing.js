import React, { Component } from "react";
// import the FilmRow child component
import FilmRow from "./FilmRow";

export default class FilmList extends Component {

  constructor(props){
    super(props)
    this.state = {
        filters: "all"
    }
}


handleFilterClick(filter){

    this.setState({
        filters: filter
    })

    console.log(`Setting filter to ${filter}`)

}

  render() {
    //  Create a constant variable holding the pre-string
    //  for the database image url
    const getImg = "https://image.tmdb.org/t/p/w780";
    const isActiv = this.state.filters === "all" && "is-active"
    //  Create a constant variable array holding Film Row components
    //  it creates components by mapping through the films array from
    //  props then pass the props to FilmRow Child component
    const allFilms = this.props.films.map((film, index) => (
      <FilmRow key={film.id} getImg={getImg} film={film} />
    ));

    return (
      // Main div for the film listing, with films h1 tag under it
      <div className="film-list">
       <div className={this.state.filters==="all"? "isactive":""}
         onClick={()=> this.handleFilterClick("all")}>
            <span className="section-count">{this.props.films.length}</span>
       </div>
      
       <div className={this.state.filters==="fave"? "isactive":""}
         onClick={()=> this.handleFilterClick("fave")}
         >
              <span className="section-count">0</span>
           </div>
        {/* <h1 className="section-title">FILMS</h1> */}
        {/* All films components array */}
        {allFilms}
      </div>
    );
  }
}