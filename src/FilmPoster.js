import React from 'react';
import TMDB from './TMDB';
 
export default class FilmPoster extends React.Component{
    
    render(){
        const allFiles = TMDB.films.map(function(data,index){
            const item = "https://image.tmdb.org/t/p/w1280"+ data.poster_path
            const year =  new Date(data.release_date);
            return <div className="film-row"><img src={item} alt="" />
             <div className="film-summary">
            <h1>{data.title}</h1>
            <p>{year.getFullYear()}</p>
            </div>
            </div>
            
            //https://image.tmdb.org/t/p/w1280{data.poster_path}
            })
    return(<div>{allFiles}</div>)
    }
}