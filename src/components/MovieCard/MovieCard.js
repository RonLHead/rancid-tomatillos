import React from 'react';
import './MovieCard.css';

const MovieCard = ({ posterPath }) => {
    return (
        <div >
            <img src={posterPath} alt="Movie poster"></img>
        </div>
    )
}

export default MovieCard