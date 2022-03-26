import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import fetchMovies from '../../apiCalls.js';
import CurrentMovie from '../CurrentMovie/CurrentMovie';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovies.allMovieData()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        console.log(error)
        this.setState({error: `${error}`})
      })
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  findSingleMovie = (id) => {
    const singleMovie = this.state.movies.movies.find(movie => movie.id === id)
    this.setState({currentMovie: singleMovie})
  }

  displayAllMovies = () => {
    this.setState({currentMovie: ''})
  }

  render() {

    let display;
    if(this.state.currentMovie) {
      display = <CurrentMovie currentMovie={this.state.currentMovie} displayAllMovies={this.displayAllMovies}/>
    } else {
      display = <Movies movieSet={this.state.movies} findSingleMovie={this.findSingleMovie} />
    }

    return( 
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <h2 className="sub-heading">The <em>second</em> most trusted measurer of movie quality!</h2>
        {this.state.error && <h2 className="error-msg">{this.state.error}</h2>}
        <Movies 
          movieSet={this.state.movies}
        {display}
      </main>
    )
  }

}

export default App;
