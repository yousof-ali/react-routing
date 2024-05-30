import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>oppps</h1>
            <p>{error.status || error.statusText}</p>
            
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