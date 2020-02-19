import React from 'react';
import FilmRow from './FilmRow'

export default class FilmListing extends React.Component{


  constructor(props){

    super(props)

    this.state = {
      filter: 'all',
    };
}

  handleFilterClick (filter){
    console.log( "Setting filter to "+ filter);
    this.setState ({
      filter: 'all',
     });
  }
 

        render() {
            const imgUrl= "https://image.tmdb.org/t/p/w780" ;
          const allFilms = this.props.films.map((film, index) => (
            <FilmRow film={film} imgUrl={imgUrl}  key={film.id}/>
       
          ));
        
     


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
                    <span className="section-count">0</span>
                </div>
            </div>
        
            {allFilms}
        </div>
          );
        }
}



