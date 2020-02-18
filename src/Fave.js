import React from 'react';

export default class Fave extends React.Component{
    // Setting isFave as a state which indicate whether or not the current film is favorited or not
    constructor(props){
        super(props);
        this.state = {
            isFave: false,
        }
    }

    handleClick = (e) =>{
        // Stop the event of displaying details of a film on the favorites icon
        e.stopPropagation()
        console.log('handling Fave click!');

        // Toggle isFave state >> is the current film favorited or not
        this.setState({
            isFave: !this.state.isFave,
        });
    };

    render(){
        // if isFave state of current film is true => film is favorited display remove icon
        // Otherwise display add film to favorites icon
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return(
            <div className={"film-row-fave " +isFave} onClick={this.handleClick}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}