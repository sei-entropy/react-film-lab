import React from 'react';
import filmRow from './filmRow'


export default class filmList extends React.Component{

render(){
let allFilms = this.props.films.map( (film, index) => {
return <filmRow film={film} key ={index}/>

})

return ( <div className="film-list">
<h1 className="section-title">FILMS </h1>
{allFilms}
</div>


)
}}



