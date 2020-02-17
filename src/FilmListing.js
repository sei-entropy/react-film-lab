import React from 'react';
import FilmRow from './FilmRow';

class FilmListing extends React.Component {
   

    render(){
        
        const allFilms = allFilms.films.map((film) => <FilmRow key={film.id} film={film} />)
        return(
            <div >
             <h1 className="section-title">FILMS</h1>
             {allFilms}
             </div>
               
        );
    }
}

export default FilmListing;