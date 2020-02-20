import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            films:TMDB.films,
            faves:[],
            current:{},
            isFave: false
        };  
         this.handleFaveToggle = this.handleFaveToggle.bind(this);

    }
    
    handleFaveToggle = (e) => {
       console.log(e);
    const faves=Array.prototype.slice.call(this.state.faves)
    console.log(faves);
     const filmIndex=faves.indexOf(e);
     console.log(filmIndex);
     
       
    if(filmIndex===-1){
        faves.push(e);
        console.log("Adding "+e.title+" to faves...");
        console.log(faves);
        
    }else{
        faves.splice(filmIndex,1);
        console.log("Removing "+e.title+" from faves....");
        console.log(faves);
        
    }

    this.setState({
             faves:faves
           })

    }
    handleDetailsClick=(e)=>{
        console.log("Fetching details for :"+e.title);

        // this.setState({
        //     current:film
        //   })
        
    }



    render(){
        return (
            <div className="film-library">
            <FilmListing  filmName={"FILMS"}
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            onDetails={this.handleDetailsClick}

            />
            <FilmDetails  detailsName={"DETAILS"} 
            film={this.state.current}
            />

            </div>

        );
    }

}