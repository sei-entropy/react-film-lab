import React from 'react';

class FilmRow extends React.Component{


    render(){




        return  (
                  <div className="film-row">
                    <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="" />

                   <div className="film-summary">
                       <h1>{this.props.film.title}</h1>
                      <p>{this.props.film.release_date}</p>
                  </div>
                         </div>
        )}
}




export default FilmRow;