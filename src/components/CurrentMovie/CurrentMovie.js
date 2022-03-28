import React from 'react'
import './CurrentMovie.css'

const CurrentMovie = ({currentMovie, displayAllMovies}) => {
    const movieYear = currentMovie.release_date.split('-');
    const movieGenres = currentMovie.genres.join(', ');

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
                        <p>{movieYear[0]}, {movieGenres}, {currentMovie.runtime}m</p>
                    <p>🍅 Average Rating: {currentMovie.average_rating.toFixed(0)}</p>
                    </div>
                    <div className="current-movie-wtk">
                        <h3>WHAT TO KNOW</h3>
                        <p>{currentMovie.overview}</p>
                        <p>Budget: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(currentMovie.budget)}</p>
                        <p>Revenue: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(currentMovie.revenue)}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => displayAllMovies()}>Back</button>
        </div>
    )
}

export default CurrentMovie
