import React from 'react'

export default class Fave extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isFave: false }
    }
    handleClick = (e) => {
        e.stopPropagation()
        this.setState({ isFave: !this.state.isFave })
    }
    render() {
        const messageIsFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${messageIsFave}`} onClick={this.handleClick}>
                <p className='material-icons'>{messageIsFave}</p>
            </div>
        )
    }
}
