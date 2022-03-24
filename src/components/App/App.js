import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movies-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [ movieData ],
      error: ''
    }
  }

  render() {
    return(
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <Movies 
          movieSet={this.state.movies}
        />
      </main>
    )
  }

}

export default App;
