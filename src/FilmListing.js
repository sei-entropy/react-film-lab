import React from 'react';
import FilmRow from './FilmRow.js'

export default class FilmListing extends React.Component{
    render(){
        const allFilms = this.props.films.map( (film, index) => {
            return < FilmRow film ={film}  key= {film.id}/>
        });
        return (
            <div>
            {allFilms}
            </div>
        );
    }
}



//         return <h1>{film.title} </h1>
//      });

//         return(
//                      <div>{allFilms}</div>

//         );
//     }


// }
