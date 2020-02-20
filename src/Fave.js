import React from 'react';
export default class Fave extends React.Component { 
    constructor (props) { 
        super (props); 

        this.state = {
        }
    }
    handleClick = (e) => { 
        console.log('handling Fave click!')
        e.stopPropagation()

       // this.setState({  isFave: !this.state.isFave })
    }
  

    render() 
    { 
         if (this.props.isFave === true )  
         this.isFave ="remove_from_queue" 
         else 
         this.isFave = 'add_to_queue'

      return <div className={`film-row-fave ${this.isFave}`}  onClick={this.handleClick} >
      <p className="material-icons" >{this.isFave}</p>
    </div>
    }
  }