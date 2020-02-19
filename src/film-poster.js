import React from 'react';

export default class FilmPoster extends React.Component{
    render(){
        return (
            <div className="poster">
        <img src={this.props.posterUrl} 
        alt={this.props.title} />
         </div>
        );


    }
}