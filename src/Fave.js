import React from 'react';

export default class Fave extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isFave: false
    };

  }


     handleClick =(e)=>{
        console.log("handling Fave click!");
        e.stopPropagation();  
        
        this.setState({
          isFave: !this.state.isFave
        })
       }
       
    render(){
      const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
      const  fullPath="film-row-fave "+isFave;
        return (
            
            <div className={fullPath} onClick={this.handleClick}>
            <p className="material-icons">add_to_queue</p>

          </div>

        );
    }

}