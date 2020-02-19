import React from "react";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    // const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      //its in the fav ,we need to remove it
      faves.splice(filmIndex, 1);
      console.log('Removing '+film +' From faves');
    } else {
      //its not in the ffaves ,add it
      faves.push(film);
      console.log('Adding '+film +'to faves');
      // this.setState({ faves });
    }
      this.setState({ faves });

    // The above is exactly the same as this.setState({faves: faves})
  };
  handleDetailsClick = (film) => {
    this.setState({ current: film });
    console.log("Hi"+film);
  };
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            film={this.state.films}
            faves={this.state.faves}
            onFaveToggle={(e) => this.handleFaveToggle()}
            handleDetailsClick
           = { () => this.handleDetailsClick()}/>
          <FilmDetails film={TMDB.films} film={this.state.current} />
        </div>
      </div>
    );
  }
}
