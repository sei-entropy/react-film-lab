import React from 'react';

export default class Fave extends React.Component{
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     // isFave: false
  //   };

  // }


     handleClick =(e)=>{
        e.stopPropagation();  
        console.log("handling Fave click!");
        
        this.props.onFaveToggle()

        // this.setState({
        //   isFave: !this.state.isFave
        // })
       }
       
    render(){
      const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
      const  fullPath="film-row-fave "+isFave;
        return (
            
            <div className={fullPath} onClick={this.handleClick}>
            <p className="material-icons">add_to_queue</p>

          </div>

        );
    }

}