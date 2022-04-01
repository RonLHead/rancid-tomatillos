import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = ({ title, posterPath, id }) => {
    return (
        <div>
            <div className="card">
                <Link to={`/${id}`}>
                <img src={posterPath} alt="Movie poster" id={id} key={id}></img>
                </Link>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard