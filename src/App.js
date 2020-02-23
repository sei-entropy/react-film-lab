import React from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state ={ 
      films: TMDB.films,
      faves: [],
      current: {}
  
    };
  
  }
  

  handleFaveToggle= (film) =>{
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
  
    if (filmIndex !== -1){
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`);
     } else {
     
      faves.push(film);
    console.log(`Adding ${film.title} to faves`);
     }
    
    this.setState({faves});
    };
    
    handleDetailsClick = (film)=> {
      const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
        method: 'GET',
        url: url
      }).then(response => {
        console.log(response) 
        console.log(`Fetching details for ${film.title}`);
        this.setState({ current: response.data })
      })
      .catch(err => {
        // WHEN FAILED
        console.log(err);
    });
  }
     

  render() {

      return (
        
          <div className="film-library">
            <FilmListing 
            faves={this.state.faves}
            handleDetailsClick={this.handleDetailsClick}
            films={this.state.films} 
            onFaveToggle= {this.handleFaveToggle} />
            <FilmDetails film={this.state.current} />
          </div>
        
      );
    }
  }