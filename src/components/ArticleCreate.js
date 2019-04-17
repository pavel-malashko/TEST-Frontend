import React from 'react';
import { Link } from 'react-router-dom';


const ArticleCreate = ( postArt ) => {

    return (

        <div className="container mt-3">

            <h1 className="dispaly-3">Articles / Create</h1>
            <form onSubmit={postArt.handleSubmit} >

                <div className="col-md-3">
                    <h2 className="p-2">
                        <span className="badge badge-default rounded">Title:</span>
                    </h2>
                    <input type="text" className="form-control" name="title" placeholder="Article title" onChange={postArt.handleChange} value={ postArt.state.title } />
                </div>

                <div className="col-md-5 mt-5">
                    <h2 className="p-2">
                        <span className="badge badge-default rounded">Body:</span>
                    </h2>
                    <textarea type="text" className="form-control" name="body" rows="6" onChange={postArt.handleChange} placeholder="Article body" value={ postArt.state.body }></textarea>
                </div>

                <div className="d-flex justify-content-start mt-3 ml-3">
                    <button type='submit' className="btn btn-outline-default btn-rounded waves-effect mr-5">Create</button>
                    <Link to="/"><button type="button" className="btn btn-outline-danger btn-rounded waves-effect">Cancel</button></Link>
                </div>   

            </form>

    </div>

    )
}

export default ArticleCreate;