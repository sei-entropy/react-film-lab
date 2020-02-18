import React from 'react';
export default class FilmRow extends React.Component {
render(){
    return (
        < div className = "film-row" >
            <img src={`https://image.tmdb.org/t/p/w780/${this.props.Film.poster_path}`} alt="" />
          
           
            < div className = "film-summary" >
                  {/* Film from  return <FilmRow Film = {film} key = {index} /> */}
                 {/* <h1>{this.props.Film.title}</h1> */}
                     <h1>{this.props.Film.title}</h1>
                      <p>{this.props.Film.release_date}</p>
                </ div>
        </div>
    );
}
}