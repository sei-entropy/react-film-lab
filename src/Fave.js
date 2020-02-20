import React from 'react';

export default class Fave extends React.Component {
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
          <div className={'film-row-fave ' + isFave} onClick={this.handleClick}>
              <p className="material-icons">{isFave}</p>
          </div>
        );
    }

    handleClick = (e) => {
        e.stopPropagation();
        console.log('Handling Fave click!');

        // Add this line. You'll call the function passed through props
        this.props.onFaveToggle();

        // Delete the `setState` line. You no longer track state here
        // this.setState({isFave: !this.state.isFave})
    }
}