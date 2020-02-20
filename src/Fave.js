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
        console.log(text)
        e.stopPropagation()
        return (

            this.setState({
                isFave: !this.state.isFave
            })
        );


    }
    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={"film-row-fave " + isFave} onClick={this.handleClick}>

                <p className="material-icons">{isFave}</p>

            </div>

        );

    }
}