import React from 'react';


export default class Fave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = (e) => {

        e.stopPropagation()

        console.log('handling Fave click!')
        //setstate
        this.setState({

            isFave: !this.state.isFave
        })
    }
    render() {

        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'


        return (
            <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>

            </div>
        )
    }
}
