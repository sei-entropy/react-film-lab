import React from 'react';
import Fave from './Fave';

class FilmRow extends React.Component{
 
    handleDetailsClick =  (film) => {
        console.log(` Fetching details for ${film}`)
    }

    render(){

        let year = new Date(this.props.film.release_date).getFullYear()


        return  (
                  <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
                    <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="" />
         
                   <div className="film-summary">
                       <Fave  onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}
                       />
                       <h1>{this.props.film.title}</h1>
                      <p>{year}</p>
                  </div>
                         </div>
        )}
}




export default FilmRow;