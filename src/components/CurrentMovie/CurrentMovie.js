import React from 'react'
import './CurrentMovie.css'

const CurrentMovie = ({currentMovie, displayAllMovies}) => {
    return (
        <div className="current-movie">
            <img src={currentMovie.backdrop_path} alt="Backdrop image"></img>
            <h3>{currentMovie.title}</h3>
            <p>{currentMovie.tagline}</p>
            <p>{currentMovie.overview}</p>
            <p>{currentMovie.runtime} minutes</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.genres}</p>
            <p>Budget: ${currentMovie.budget}</p>
            <p>Revenue: ${currentMovie.revenue}</p>
            <p>{currentMovie.average_rating}</p>
            <button onClick={() => displayAllMovies()}>Back</button>
        </div>
    )
}

export default CurrentMovie
