import React from 'react';
import '../App/App.css';


const ErrorHandling = ({ error }) => {
    return (
        <div>
            <h2 className='error-msg'>{error}</h2>
        </div>
    )
}

export default ErrorHandling;