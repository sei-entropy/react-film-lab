import React from 'react';

export default class FilmPoster extends React.Component{
    render(){
        return (
            <div>
        <img src={this.props.posterUrl} 
        alt={this.props.title} />
         </div>
        );


    }
}