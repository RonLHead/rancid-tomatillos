import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import fetchMovies from '../../apiCalls.js';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import { Route } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  fetchAllMovies = () => {
    fetchMovies.getMovieData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(data => this.setState({movies: data.movies}))
    .catch(error => {
      console.log(error)
      this.setState({error: `${error}`})
    })
  }

  componentDidMount = () => this.fetchAllMovies()

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  displayAllMovies = () => {
    this.setState({currentMovie: ''})
  }

  render() {
    return( 
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <h2 className="sub-heading">The <em>second</em> most trusted measurer of movie quality!</h2>
        {this.state.error && (
          <ErrorHandling 
            error={this.state.error}
          />
        )}
        <Route
          exact path="/"
          render={() => <Movies movieSet={this.state.movies} />}
        />
        <Route 
          exact path="/:id" 
          render={({match}) => <CurrentMovie id={match.params.id} />} 
        />
      </main>
    )
  }

}

export default App;