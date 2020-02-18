import React from 'react';
import FilmRow from './FilmRow';
class FilmListing extends React.Component{
 
    constructor(props){

      super(props);

      this.state = {
        filter : "all" ,

    }


    }

    handleFilterClick =  (Filter) => {
        console.log(`Setting filter to ${Filter}`)
        this.setState({
            filter : Filter
        })
    }

    render(){

        let allFilms = this.props.filmTital.map( (film, index) => {
            
            return <FilmRow  film={film} key={film.id} />
        })
    
    
   
    return <div>
   <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters" >
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.filmTital.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}

</div>
    </div>
    }

}



export default FilmListing;