import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

export default class FilmRow extends React.Component{

    handleDetailsClick=(film)=>{
        console.log("Fetching details for :"+film);
        
    }

    render(){
        // const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.image 
        const dateYear=new Date(this.props.date).getFullYear()

    return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.title)}>
     {/* <img src={posterUrl} alt="film-Image" /> */}
        {/* <FilmPoster image={this.props.image} /> */}
        <FilmPoster image={this.props.image}/>
        <div className="film-summary">
        <h1>{this.props.title}</h1>
        <p>{dateYear}</p>
        </div>
        <Fave />

        </div>
    );
    }
}
