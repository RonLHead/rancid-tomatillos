import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, posterPath, findSingleMovie, id }) => {
    return (
        <div>
            <div className="card">
                <img src={posterPath} alt="Movie poster" onClick={() =>  findSingleMovie(id)}></img>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard