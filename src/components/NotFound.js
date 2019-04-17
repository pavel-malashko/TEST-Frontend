import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {

    return (

        <div className="mt-5">

             <h1 className="dispaly-4">Error: Page Not Found </h1>
             <Link to="/">
                <button type="button" className="btn btn-outline-danger btn-rounded waves-effect mt-4">Articles Page</button>
             </Link>

        </div>

    )

}

export default NotFound;