import React from 'react';

export default class FilmDetails extends React.Component{

    render(){
        return (
          
     <div className="film-details">
        <h1 className="section-title">{this.props.detailsName}</h1>
     </div>

        );
    }
}