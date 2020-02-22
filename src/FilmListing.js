import React from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends React.Component{
  constructor(props){
    super(props)

    this.state = {
    filter: 'all'
  }
}
  handleFilterClick = (filter)=> {
    console.log('Setting filter to',filter)
    this.setState({
      filter: filter
    })
  }
  render(){
    let show = [];
    const allFilms = this.props.movie.films.map((film, index) => (
      <FilmRow
        handleDetailsClick={this.props.handleDetailsClick}
        film={film}
        key={index}
        isFave={this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
      />
    ));
    const favesFilms = this.props.faves.map((film, index) => {
      return (
        <FilmRow
          handleDetailsClick={this.props.handleDetailsClick}
          film={film}
          key={index}
          isFave={this.props.faves.includes(film)}
          onFaveToggle={() => this.props.onFaveToggle(film)}
        />
      );
    });
    this.state.filter === "all"
      ? (show = allFilms)
      : (show = favesFilms);

    return(
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">

      <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
            onClick={() => this.handleFilterClick("all")}>
          ALL
          <span className="section-count">{this.props.movie.films.length}</span>
          </div>
                    
      <div onClick={() => this.handleFilterClick('faves')} 
      className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
          FAVES
      <span className="section-count">{this.props.faves.length}</span>
      </div>
      </div>

      {show}

    </div>
      );
  }
} 