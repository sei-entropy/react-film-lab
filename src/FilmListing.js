import React from "react";
import FilmRow from "./FilmRow";
export default class FilmListing extends React.Component {
  constructor (props){
    super(props);
    this.state = {
    filter: 'all',
    }
  }
  handleFilterClick = (filter) => {
    console.log("Setting filter to : " + filter);
     this.setState({
       filter: filter
     });
  };
  render() {
    // Film From <FilmListing MyFilms={TMDB.films}/>
    const allFilms = this.props.film.map((film, index) => {
      return <FilmRow Film={film} key={film.id} />;
    });
    return (
      <div className="film-list">

        <h1 className="section-title">FILMS</h1>
        <div className = "film-list-filter">

          <div className= {`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className = "section-count">{this.props.film.length}</span>
          </div>
          
          <div className = {`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>


        </div>
        {allFilms}

      </div>
    );
  }
}
