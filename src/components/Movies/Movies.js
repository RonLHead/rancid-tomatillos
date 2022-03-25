import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

const Movies = ( {movieSet} ) => {
    const movies = movieSet.movies
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                id={movie.id}
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                backdropPath={movie.backdrop_path}
                averageRating={movie.average_rating}
                releaseDate={movie.release_date}
            />
        )
    })
    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default Movies