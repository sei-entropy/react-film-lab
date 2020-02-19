import React from 'react';

export default class Fave extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            isFave:false,
        }
    }

    handleClick = (e) => {
        e.stopPropagation();
        console.log("work");
        this.setState(
            {
                isFave: !this.state.isFave,
            }
        )
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