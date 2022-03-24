import React, { Component } from 'react';
import MovieCard from './src/components/MovieCard/MovieCard.js';
import movieData from '../../movies-data';

const Movies = ( {movieData} ) => {
    const movieCards = movieData.map(movie => {
        return (
            <MovieCard 
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
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