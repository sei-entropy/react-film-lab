import React from 'react';
import TMDB from './TMDB';

export default class FilmListing extends React.Component{
    render(){
        const alldata = TMDB.films.map(function(data,index){
            const item = "https://image.tmdb.org/t/p/w1280"+ data.poster_path
            return <div className="film-row"><img src={item} alt="" />
             <div className="film-summary">
            <h1>{data.title}</h1>
            <p>{data.release_date}</p>
            </div>
            </div>
            
            //https://image.tmdb.org/t/p/w1280{data.poster_path}
            })
        return (<div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {alldata }
        </div>

        )
    }
}
