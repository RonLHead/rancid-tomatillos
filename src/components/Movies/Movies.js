import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const Movies = ( {movieSet} ) => {
    const movies = movieSet[0].movies
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                // id={movie.id}
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                // backdropPath={movie.backdrop_path}
                // averageRating={movie.average_rating}
                // releaseDate={movie.release_date}
            />
        )
    })
    return (
        <div>
            {movieCards}
        </div>
    )
}

export default Movies