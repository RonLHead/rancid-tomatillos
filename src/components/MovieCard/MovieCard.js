import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, posterPath, findCurrentMovie, id }) => {
    return (
        <div>
            <div className="card">
                <img src={posterPath} alt="Movie poster" onClick={() =>  findCurrentMovie(id)}></img>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard