import React from 'react';
import { Link } from 'react-router-dom';


const ArticleUpdate = (updateArt) => {
   
    return (

        <div className="container mt-3">

            <h1 className="dispaly-3">Articles / Edit</h1>
            <form onSubmit={updateArt.handleSubmit}>

                <div className="col-md-3">
                    <h2 className="p-2">
                        <span className="badge badge-default rounded">Title:</span>
                    </h2>
                    <input type="text" className="form-control" placeholder="Article title" name="title" 
                        onChange={updateArt.handleChange} value={ updateArt.state.title } />
                </div>

                <div className="col-md-5 mt-5">
                    <h2 className="p-2">
                        <span className="badge badge-default rounded">Body:</span>
                    </h2>
                    <textarea type="text" className="form-control" rows="6" placeholder="Article body" name="body"
                        onChange={updateArt.handleChange} value={ updateArt.state.body } />
                </div>

                <div className="d-flex justify-content-start mt-3">
                    <button type="submit" className="btn btn-outline-primary btn-rounded waves-effect">Update</button>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-danger btn-rounded waves-effect">Cancel</button>
                    </Link>  
                </div> 

            </form>

        </div>

    )

}

export default ArticleUpdate;