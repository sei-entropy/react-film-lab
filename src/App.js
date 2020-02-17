import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

export default class App extends React.Component{

    render(){
        return (
            <div className="film-library">
            <FilmListing  filmName={"FILMS"} filmsList={TMDB.films}/>
            <FilmDetails  detailsName={"DETAILS"} filmsList={TMDB.films}/>

            </div>

        );
    }

}