import React, { Component } from 'react';

const MovieCard = ({ id, posterPath, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={posterPath} alt="Movie poster"></img>
        </div>
    )
}

export default MovieCard