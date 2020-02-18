import React from 'react';

export default class Fave extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFave: false,
        }
    }

    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
          <div className={'film-row-fave ' + isFave} onClick={this.handleClick}>
              <p className="material-icons">{isFave}</p>
          </div>
        );
    }

    handleClick = (e) => {
        this.setState({
            isFave: !this.state.isFave,
        });
        console.log('handling Fave click!');
        e.stopPropagation();
    }
}