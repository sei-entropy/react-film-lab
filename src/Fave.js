import React from 'react'

export default class Fave extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }

    handleClick = (e) => {
        console.log("handling Fave click!", this.props.isFave);
        e.stopPropagation()

        this.props.onFaveToggle()

    }
    render() {

        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div
                className={`film-row-fave ${isFave}`} >

                <p className="material-icons " onClick={(e) => this.handleClick(e)} >{isFave}</p>
            </div>
        )
    }
}