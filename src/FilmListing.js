import React from 'react';
import FilmRow from './FilmRow.js'



export default class FilmListing extends React.Component { 

  constructor(props){ 
    super (props); 

    this.state = { 
      filter: 'all',
    }

  }
  handleFilterClick = (filter ) => { 
console.log('Just filter',filter)
      	this.setState({
         filter: filter
          });
  }




  render() 
  { 


    
    let showFilms = [];

    const allFilms = this.props.films.map((film, index) => (
      <FilmRow
        handleDetailsClick={this.props.handleDetailsClick}
        FilmRow title={film.title} 
         key={film.id}
         year_relase={film.release_date} 
         poster={film.poster_path}

        isFave={this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
      />
    ));


       const favesFilms = this.props.faves.map((film, index) => {
        return ( 
          <FilmRow
            handleDetailsClick={this.props.handleDetailsClick}
            FilmRow title={film.title} 
             key={film.id}
             year_relase={film.release_date} 
             poster={film.poster_path}
            isFave={this.props.faves.includes(film)}
            onFaveToggle={() => this.props.onFaveToggle(film)}
          />
        );
      });
       this.state.filter === "all"
       ? (showFilms = allFilms)
       : (showFilms = favesFilms);
 

    return  (
        
        <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
      <div
        className={`film-list-filter ${ this.state.filter === "all" ? "is-active" : "" }`}
        onClick={() => this.handleFilterClick("all")}
      >
        ALL
        <span className="section-count">{this.props.films.length}</span>
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
    {showFilms}
  </div>
  
    );
  }
}
