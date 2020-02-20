import React from 'react';
import FilmRow from "./FilmRow";
export default class FilmListing extends React.Component{
    constructor(props) {
        super(props);
    }
    state = { 
        filter: "all"
       }
  
       handleDetailsClick = (film) =>{
        this.props.handleDetailsClick();
            }
  
      render() { 
        let allFilms = [];
        if(this.state.filter == "all"){
          
          allFilms = this.props.films.map((film) => {
            return (
            <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={() => this.props.onFaveToggle(film)} 
            isFave={this.props.faves.includes(film)} 
            onDetailsClick={() => this.props.onDetailsClick(film)}
            />
          )})}
  
          else if(this.state.filter == "faves"){
            
            allFilms = this.props.faves.map((film) => {
              return (
              <FilmRow
              film={film}
              key={film.id}
              onFaveToggle={() => this.props.onFaveToggle(film)} 
              isFave={this.props.faves.includes(film)} 
              onDetailsClick={() => this.props.onDetailsClick(film)}
              />
            )})
          }
  
  
          return ( 
            <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
              FAVES
              <span className="section-count">{this.props.faves.length}</span>
          </div>
      </div>
      {allFilms}
  </div>
  
          )}
  
      handleFilterClick = (filter) =>{
        let copyState = {...this.state};
        copyState.filter = filter;
        this.setState(copyState);
      }
  }