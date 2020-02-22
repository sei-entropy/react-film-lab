import React from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends React.Component {
    constructor(props){
        super(props);
        // Setting the default state of filter key to all films
        this.state ={
            filter: 'all',
        }
    }

    // Change filter state based on the passed argument 
    // the arguments are passed based on the div that was clicked
    handleFilterClick = (filter) => {
        console.log('Setting filter to', filter);
        // 
        this.setState({
            filter: filter,
        })
    }

    render(){
        // passing each film's film_id as a key and the film itself to display them as a row
        const allFilms = this.props.films.map((film)=>{
            return <FilmRow key={film.id} film={film} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)} handleDetailsClick={this.props.handleDetailsClick}/>
        });

        const allFaves = this.props.faves.map((film)=>{
            return <FilmRow key={film.id} film={film} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)} handleDetailsClick={this.props.handleDetailsClick}/>
        });

        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    {/* Setting the class name based on the activity of the button and attaching a function on click event */}
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('all')}>
                        ALL
                        {/* Displaying number of all films */}
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    {/* Setting the class name based on the activity of the button and attaching a function on click event */}
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('faves')}>
                        FAVES
                        {/* Displaying number of favorited films */}
                        <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>
                {/* Displaying the films */}
                <h1>{this.state.filter === 'all'? allFilms : allFaves}</h1>
            </div>
        )
    }
}