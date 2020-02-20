import React from 'react';


export default class Fave extends React.Component{
constructor(props){
super(props)
/*this.state={isFave:false,}*/

}

handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')
  
    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle()
  
    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  }

render() {
const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
return (

    <div onClick={this.handleClick} className={"film-row-fave "+isFave}>
        <p  className="material-icons">{isFave}</p>
    </div>

);
}

} 
