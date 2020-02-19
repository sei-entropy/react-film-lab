import React from 'react';
import FilmRow from './FilmRow';



export default class FilmListing extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      filter: "all"
    };

  }

  handleFilterClick=(filter)=>{
    console.log("Setting filter to "+filter);
    
    this.setState({
      filter: filter
    })
  }

    render(){
    const allFilms = this.props.filmsList.map(function(film){
        return <FilmRow image={film.poster_path} title={film.title} 
        date={film.release_date} 
        
        key={film.id} />   
    })
  
        return (

       <div className="film-list">
         <h1 className="section-title">{this.props.filmName}</h1>
    <div className="film-list-filters">
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}  onClick={() => this.handleFilterClick('All')}>
            ALL
            <span className="section-count">{this.props.filmsList.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}  onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

        {allFilms}
      </div>
        );
    }
}