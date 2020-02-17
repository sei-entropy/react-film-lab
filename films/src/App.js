import React from 'react';
import logo from './logo.svg';
import './App.css';
import TMBD from './TMBD'
import filmList from './filmList'
import filmDetails from ''
import { render } from '@testing-library/react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>
    </div>);
}
class app extends React.Component{
render(){
    return ( <div className = "film-library" >
              <filmList film={TMBD.films} />

              

 </div>
      );}}export default app;