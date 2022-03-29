import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

const Movies = ( {movieSet} ) => {
    const movies = movieSet;
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
                tagline={movie.tagline}
                runtime={movie.runtime}
                overview={movie.overview}
                budget={movie.budget}
                revenue={movie.revenue}
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