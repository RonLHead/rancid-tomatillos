import React from 'react'
import './CurrentMovie.css'

const CurrentMovie = ({currentMovie, displayAllMovies}) => {
    return (
        <div className="current-movie">
            <img className="backdrop" src={currentMovie.backdrop_path} alt="Backdrop image"></img>
            <div className="title-container">
                <img className="current-poster" src={currentMovie.poster_path} alt="Poster image"></img>  
                <div className="movie-info">
                    <h3>{currentMovie.title}</h3>
                    <p>{currentMovie.tagline}</p>
                    <p>{currentMovie.release_date}, {currentMovie.genres}, {currentMovie.runtime}m</p>
                    <p>🍅 Average Rating: {currentMovie.average_rating}</p>
                    <h3>WHAT TO KNOW</h3>
                    <p>{currentMovie.overview}</p>
                    <p>Budget: ${currentMovie.budget}</p>
                    <p>Revenue: ${currentMovie.revenue}</p>
                </div>
            </div>
            <button onClick={() => displayAllMovies()}>Back</button>
        </div>
    )
}

export default CurrentMovie
