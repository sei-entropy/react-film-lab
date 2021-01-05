import React from 'react';
import FilmRow from './FilmRow'

export default class FilmListing extends React.Component{

        render() {
            const imgUrl= "https://image.tmdb.org/t/p/w780" ;
          const allFilms = this.props.films.map((film, index) => (
            <FilmRow film={film} imgUrl={imgUrl}  key={film.id}/>
       
          ));
        
     

          return (
            <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              {allFilms}
            </div>
          );
        }
      }



