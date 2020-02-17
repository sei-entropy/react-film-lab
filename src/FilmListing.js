import React from 'react';
  import FilmRow from './FilmRow';
class FilmListing extends React.Component{


    render(){

        let allFilms = this.props.filmTital.map( (film, index) => {
            
            return <FilmRow  film={film} key={film.id} />
        })
    
    
   
    return <div>
    {allFilms}
    </div>
    }

}



export default FilmListing;