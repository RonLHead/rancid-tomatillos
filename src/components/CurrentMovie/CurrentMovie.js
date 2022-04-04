import React, { Component } from 'react';
import fetchMovies from '../../apiCalls.js';
import './CurrentMovie.css';
import { NavLink } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling.js';

class CurrentMovie extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMovie: '',
            error: ''
        }
    } 

    fetchCurrentMovie = (id) => {
        fetchMovies.getMovieData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(data => this.setState({currentMovie: data.movie}))
            .catch(error => {
                console.log(error)
                this.setState({error: `${error}`})
            })
    }
    
    componentDidMount = () => this.fetchCurrentMovie(this.props.id)
    
    render() {
        let currentMovieDetails;
        if(this.state.currentMovie) {
            let movieYear = this.state.currentMovie.release_date.split('-')[0];
            let movieGenres = this.state.currentMovie.genres.join(', ');
            let movieRating = this.state.currentMovie.average_rating.toFixed(0);
         

        currentMovieDetails = (
            <div className="current-movie">
                
                <NavLink to="/">
                    <button>Back</button>
                </NavLink>
                <img className="backdrop" src={this.state.currentMovie.backdrop_path} alt="Backdrop image"></img>
                <div className="title-container">
                    <img className="current-poster" src={this.state.currentMovie.poster_path} alt="Poster image"></img>  
                    <div className="movie-info">
                        <h3 className="current-movie-title">{this.state.currentMovie.title}</h3>
                        <div className="current-movie-stats">
                            <p>{this.state.currentMovie.tagline}</p>
                            <p>{movieYear}, {movieGenres}, {this.state.currentMovie.runtime}m</p>
                            <p>🍅 Average Rating: {movieRating}</p>
                        </div>
                        <div className="current-movie-wtk">
                            <h3>WHAT TO KNOW</h3>
                            <p>{this.state.currentMovie.overview}</p>
                            <p>Budget: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.state.currentMovie.budget)}</p>
                            <p>Revenue: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.state.currentMovie.revenue)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        
        return (
            <div>
                {this.state.error && (
                    <ErrorHandling
                      error={this.state.error}
                    />
                )}
                {currentMovieDetails}
            </div>
        )
    }
}

export default CurrentMovie