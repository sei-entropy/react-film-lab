import React from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state ={ 
      films: TMDB.films,
      faves: [],
      current: {}
  
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }

  handleFaveToggle= (film) =>{
    const faves = [...this.state.faves];
    const filmIndex = faves.prototype.indexOf()
    const filmIndex = faves.indexOf(film)
  
    if (filmIndex !== -1){
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`)
     }
     else{
      faves.push(film);
      console.log(`Adding ${film.title} to faves`)
     }
    
    this.setState({faves})
    }
    
    handleDetailsClick = (film)=> {
      this.setState({current: film})
      console.log(film)
     }


  render() {

      return (
        <div className="App" >
          <div className="film-library">
            <FilmListing films={this.state.films} onFaveToggle= {this.handleFaveToggle()} />
            <FilmDetails film={this.state.current} />
          </div>
        </div>
      );
    }
  }