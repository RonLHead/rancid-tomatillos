import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import CurrentMovie from '../CurrentMovie/CurrentMovie'
import movieData from '../../movies-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      currentMovie: '',
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  findSingleMovie = (id) => {
    const singleMovie = this.state.movies.movies.find(movie => movie.id === id)
    this.setState({currentMovie: singleMovie})
  }

  render() {

    let display;
    if(this.state.currentMovie) {
      display = <CurrentMovie currentMovie={this.state.currentMovie} />
    } else {
      display = <Movies movieSet={this.state.movies} findSingleMovie={this.findSingleMovie} />
    }

    return( 
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <h2 className="sub-heading">The <em>second</em> most trusted measurer of movie quality!</h2>
        {display}
      </main>
    )
  }

}

export default App;
