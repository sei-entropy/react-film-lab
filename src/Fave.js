import React , {Component} from 'react';


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
        this.props.onFaveToggle(); 
    }
  

    render() {
      const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
      const message = this.props.isFave ? "remove_from_queue" : "add_to_queue";
      return (
        <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
          <p className="material-icons"> {message} </p>
        </div>
      );
    }
  }