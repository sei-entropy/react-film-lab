import React from 'react'
import FilmListing from "./Film-list";
import Fave from "./Fave";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends React.Component {
    state = { 
        film: {}
       }
  
      handleClick = (e) =>{
        this.setState({state: this.props.film})
        this.props.onDetailsClick(this.props.film);
        console.log("handling Details click!");
    }
  
  
      render() { 
          
          const filmDate = new Date(this.props.film.release_date);
          let year = filmDate.getFullYear();
          return ( 
              <div className="film-row" onClick={this.handleClick}>
              <FilmPoster film={this.props.film}/>
            
              <div className="film-summary" >              
              <h1>{this.props.film.title}</h1>
                <p>{year}</p>
              </div>
              <Fave onFaveToggle={this.props.onFaveToggle} />
            </div>
          );
      }
  }