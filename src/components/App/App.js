import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movies-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    return( 
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <h2 className="sub-heading">The <em>second</em> most trusted measurer of movie quality!</h2>
        <Movies 
          movieSet={this.state.movies}
        />
      </main>
    )
  }

}

export default App;
