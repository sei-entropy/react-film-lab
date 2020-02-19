import React from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';
class App extends React.Component{

  constructor(props){
 
 super(props);
 this.handleFaveToggle = this.handleFaveToggle.bind(this)

 this.state ={ 
  film : TMDB.films,
  faves : [],
  current : {}
   
 }

  }


  handleFaveToggle = (film) => {
 const faves = this.state.faves.slice();
 const filmIndex = faves.indexOf(film);
   console.log("before"+filmIndex);
 if ( filmIndex > -1 ) {
  console.log("inside one "+filmIndex);
   faves.splice(filmIndex, 1)
 } else {
  console.log("inside else"+filmIndex);
   faves.push(film)
 }

 this.setState({faves});

  }

  render(){


  return (
    <div className="film-library">

  <div className="film-list">
  
     <h1 className="section-title">FILMS</h1>
     <FilmListing  filmTital={this.state.film} faves={this.state.faves} 
     onFaveToggle={this.handleFaveToggle}/>
     
  </div>

  <div className="film-details">
       <FilmDetails  filmDetails={this.state.current}/>
       <h1 className="section-title">DETAILS</h1>
       
       </div>

</div>
  )
  }//end render

}//end class App

export default App;
