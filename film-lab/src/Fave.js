import React from 'react';

export default class Fave extends React.Component{
   
    handleClick =(e)=>{
        console.log("handling Fave click!");
    }
    render(){
        return(
            <div onClick={this.handleClick} className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }

}