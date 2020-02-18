import React from 'react';

export default class FilmRow extends React.Component{
    
    render(){
        const year = new Date(this.props.release_date)
        return(
            <div className="film-row">
              <img src={this.props.poster_path} alt="" />
              <div className="film-summary">
                <h1>{this.props.title} </h1>
                <p>year.getFullYear()</p>
               </div>
            </div>
        )
    }
}