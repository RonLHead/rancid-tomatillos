import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = ({ title, posterPath, id }) => {
    return (
        <Link to={`/${id}`}>
            <div>
                <div className="card">
                    <img src={posterPath} alt="Movie poster" id={id} key={id}></img>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard