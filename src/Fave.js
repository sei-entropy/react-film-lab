import React from 'react';
export default class Fave extends React.Component { 
    constructor (props) { 
        super (props); 

        this.state = {
            isFave : false,

        }
    }
    handleClick = (e) => { 
        console.log('handling Fave click!')
        e.stopPropagation()

        this.setState({ 
            isFave: !this.state.isFave
        })
    }
  

    render() 
    { 
         if (this.state.isFave === true )  
         this.fave ="remove_from_queue" 
         else 
         this.fave = 'add_to_queue'
         
      return <div className={`film-row-fave ${this.fave}`}  onClick={this.handleClick} >
      <p className="material-icons" >{this.fave}</p>
    </div>
    }
  }