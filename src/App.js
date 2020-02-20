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
    // handleSearchChange = (e) => {
    //     const textValue = e.target.value;
    
    //     const filteredFruitList = this.props.fruits.filter(function(fruit) {
    //       return fruit.toLowerCase().includes(textValue.toLowerCase());
    //     });
    
    //     this.setState({
    //       searchstate:textValue,
    //       fruitsToDisplay: filteredFruitList,
    //     })
    //   }
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
            //  isFave: !this.state.isFave
           })

    }



    render(){
        return (
            <div className="film-library">
            <FilmListing  filmName={"FILMS"}
            // filmsList={TMDB.films} 
            films={this.state.films}
            faves={this.state.faves}
            // onFaveToggle={this.state.onFaveToggle}
            onFaveToggle={this.handleFaveToggle}

            />
            <FilmDetails  detailsName={"DETAILS"} 
            // filmsList={TMDB.films}
            film={this.state.current}
            />

            </div>

        );
    }

}