import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails.js";
import FilmListing from "./FilmListing.js";
import TMDB from "./TMDB.js";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: TMDB.films,
            faves: [],
            current: {}
        };
    }

    handleFaveToggle = film => {
        const faves = this.state.faves.slice();
        const filmIndex = faves.indexOf(film);

        if (filmIndex === -1) {
            console.log(`Adding [${film.title}] to faves...`);
            faves.push(film);
        } else {
            console.log(`Removing [${film.title}] from faves...`);
            faves.splice(filmIndex, 1);
        }

        this.setState({
            faves
        });
    };

    handleShowDetails = currentFilm => {
        const url = `https://api.themoviedb.org/3/movie/${currentFilm.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

        axios
            .get(url)
            .then(res => {
                console.log(res);
                console.log(`Fetching details for: ${currentFilm.title}`);

                this.setState({
                    current: res.data
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="film-library">
                <FilmListing
                    films={this.state.films}
                    faves={this.state.faves}
                    onFaveToggle={this.handleFaveToggle}
                    onShowDetails={this.handleShowDetails}
                />

                <FilmDetails
                    films={this.state.films}
                    film={this.state.current}
                />
            </div>
        );
    }
}

export default App;
