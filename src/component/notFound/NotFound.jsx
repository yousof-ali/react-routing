import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>oooops</h1>
            <p>{error.error.message || error.statusText}</p>
            
            {
                error.status === 404 && <div>
                    <p>your status is 404</p>
                    <Link to={'/'}><button>Go Back</button></Link>
                </div>
            }

        </div>
    );
};

export default NotFound;