import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, posterPath }) => {
    return (
        <div>
            <div className="card">
                <img src={posterPath} alt="Movie poster"></img>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard