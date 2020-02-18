import React, { Component } from "react";
// import filmPost child component
import FilmPoster from "./FilmPoster";

export default class Fave extends Component {

    constructor(props) {
        super(props);

        this.state = {

            isFave: false
        };

    }
    handleClick = (e) => {
        const text = "handling Fave click!";
        e.stopPropagation()
        return (
            console.log(text)

        );

        this.setState({
            isFave: !this.state.isFave
        });

    }
    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className="film-row-fave add_to_queue" onClick={this.handleClick}>

                <p className="material-icons">add_to_queue</p>

            </div>

        );

    }
}