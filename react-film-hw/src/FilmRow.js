import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends React.Component {
    render() {

        return (
            <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.title)}>
        <FilmPoster poster_path={this.props.poster_path} />
        <center className="film-summary">
            <h1>{this.props.title}</h1>
            <p>{this.props.year}</p>
            <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
        </center>
    </div>
        );
    }
}
