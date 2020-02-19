import React from 'react';

class Fave extends React.Component{
    
   constructor(props){
     
     super(props);
     this.state = {
        

     }


   }


    handleClick =(e) => {
        e.stopPropagation();
        console.log("handling Fave click!");
         this.props.onFaveToggle()

       
    }


    render(){

        
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

        return  (
            <div  onClick={this.handleClick} className="film-row-fave add_to_queue">
            <p className="material-icons">{isFave}</p>
          </div>
        )}
}




export default Fave;