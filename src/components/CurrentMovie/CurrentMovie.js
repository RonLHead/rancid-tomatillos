import React from 'react'
import './CurrentMovie.css'

const CurrentMovie = ({currentMovie, displayAllMovies}) => {
    const movieYear = currentMovie.release_date.split('-');

    return (
        <div className="current-movie">
            {/* <div> */}
                <img className="backdrop" src={currentMovie.backdrop_path} alt="Backdrop image"></img>
            {/* </div> */}
            <div className="title-container">
                <img className="current-poster" src={currentMovie.poster_path} alt="Poster image"></img>  
                <div className="movie-info">
                    <h3 className="current-movie-title">{currentMovie.title}</h3>
                    <div className="current-movie-stats">
                        <p>{currentMovie.tagline}</p>
                        <p>{movieYear[0]}, {currentMovie.genres}, {currentMovie.runtime}m</p>
                    <p>🍅 Average Rating: {currentMovie.average_rating}</p>
                    </div>
                    <div className="current-movie-wtk">
                        <h3>WHAT TO KNOW</h3>
                        <p>{currentMovie.overview}</p>
                        <p>Budget: ${currentMovie.budget}</p>
                        <p>Revenue: ${currentMovie.revenue}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => displayAllMovies()}>Back</button>
        </div>
    )
}

export default CurrentMovie
