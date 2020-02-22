import React, { Component } from "react";

export default class FilmPoster extends Component {
    render() {
        return (

            <div>
                <img src={this.props.posterUrl} alt={this.props.title} />
            </div>
        );
    }
}