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
    this.setState({filter: filter})
  }

  render(){
    const allFilms = this.props.movies.films.map((item, index) => {
        return <FilmRow film={item} key={index}/>
    })


    return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div onClick={() => this.handleFilterClick('all')}  
        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
          ALL
          <span className="section-count">{this.props.movies.films.length}</span>
        </div>
        
        <div onClick={() => this.handleFilterClick('faves')} 
        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

    {allFilms}
    
    </div>
      );
  }
}