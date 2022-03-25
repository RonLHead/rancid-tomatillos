import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
// import movieData from '../../movies-data';

// import fetchMovies from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
    // fetchMovies
      .then(data => {
        console.log(data.movies)
        this.setState({movies: data.movies})
      })
      .catch(error => {
        console.log(error)
        this.setState({error: `${error}`})
      })
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
