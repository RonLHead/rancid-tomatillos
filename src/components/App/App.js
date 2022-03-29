import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import fetchMovies from '../../apiCalls.js';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import { Route } from 'react-router-dom';


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

  // handleChange = (event) => {
  //   this.setState({search: event.target.value});
  // }

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
        {this.state.error && <h2 className="error-msg">{this.state.error}</h2>}
        <Route
          exact path="/"
          render={() => <Movies movieSet={this.state.movies}/>}
        />
        <Route 
          exact path="/:id" 
          render={({ match }) => {
            const movie = this.state.movies.find(film => film.id === parseInt(match.params.id))
            return <CurrentMovie currentMovie={movie}/>
          }}
        />
      </main>
    )
  }

}

export default App;
