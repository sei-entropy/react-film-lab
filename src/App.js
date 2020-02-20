import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: TMDB.films,
            current: {},
            faves: [],
        };

        this.handleFaveToggle = this.handleFaveToggle.bind(this);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleFaveToggle = (film) => {
        const faves = this.state.faves.slice();
        const filmIndex = faves.indexOf(film);

        if(filmIndex === -1) {
            console.log('Adding to fave the film', faves[filmIndex]);
            faves.push(film);
        } else {
            console.log('removing from fave the film', faves[filmIndex]);
            faves.splice(filmIndex, 1);
        }

        this.setState({faves});
    };

    handleDetailsClick = (film) => {
        console.log(film, 'clicked for details');
        this.setState({
            current: film,
        })
    };

    render() {
        return (
            <div className="App" >
                <div className="film-library">
                    <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}
                        handleDetailsClick={this.handleDetailsClick}/>
                    <FilmDetails films={this.state.current} film={this.state.current}/>
                </div>
            </div>
        );
    }
}

export default App;
