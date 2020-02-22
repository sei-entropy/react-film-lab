import React from 'react';
import FilmRow from './FilmRow';
import './index.css';
class FilmListing extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
          filter: "all"
        };
      }
    
      handleFilterClick = filter => {
        this.setState({ filter });
      };


    
    render(){

        const state = (this.state.filter === 'faves') ? this.props.faves : this.props.filmTital
        
        let allFilms = state.map( (film, index) => {
            
            return <FilmRow  film={film} key={film.id} 
            onFaveToggle={() => this.props.onFaveToggle(film)}
            isFave={this.props.faves.includes(film)}/>
        })
    
    
   
    return (   // Main div for the film listing, with films h1 tag under it
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-detail">
  <p>
    <i className="material-icons">subscriptions</i>
    <span>No film selected</span>
  </p>
</div>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${
            this.state.filter === "all" ? "is-active" : ""
          }`}
          onClick={() => this.handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{this.props.filmTital.length}</span>
        </div>
        <div
          onClick={() => this.handleFilterClick("faves")}
          className={`film-list-filter ${
            this.state.filter === "faves" ? "is-active" : ""
          }`}
        >
          FAVES
          <span className="section-count">{this.props.faves.length}</span>
        </div>
      </div>
      {/* All films FilmRow components array */}
      {allFilms}
    </div>
    )}

}



export default FilmListing;