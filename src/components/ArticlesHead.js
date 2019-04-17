import React from 'react';
import { Link } from 'react-router-dom';
import ArticleViewContainer from '../containers/ViewContainer';
import Pagination from "react-js-pagination";


const ArticlesHeader = (  articles ) => {

    let { data, page, limit, count } = articles,
        offset = limit * (page - 1),
        startCount = 0;   

    return (

            <div className="container">
            
                <div className="d-flex justify-content-between m-5">
                    <h1>Articles</h1>
                    <Link to="/create"><button type="button" className="btn btn-outline-default btn-rounded waves-effect">Create</button></Link>
                </div>
              
                <table className="table table-striped border border-grey">
                
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    
                    <tbody >

                        { data  ? data.map(( article, ind ) => {
                            
                            if (ind >= offset && startCount < limit) {
                                startCount++;
                                return <tr key={ind}>                                 
                                            <th scope="row">{article._id}</th>
                                            <td>{article.title}</td>
                                            <td>{article.body}</td>
                                            <td>
                                                <div className="d-flex justify-content-center ml-5">
                                                    <Link to={`/update/${article._id}`}><button type="button" className="ml-5 btn btn-outline-primary btn-rounded waves-effect">Edit</button></Link>                          
                                                    <ArticleViewContainer id={article._id}/>       
                                                </div>                              
                                            </td>
                                        </tr>  
                            }

                            else return null;                          
                            
                            }): <tr><td>'Loading...'</td></tr>

                        }

                    </tbody>

                </table>

                <div className="d-flex justify-content-center mt-4">

                    <Pagination
                        linkClass={"href-class"}
                        activeClass={"href-active-class"}
                        activePage={page}
                        itemsCountPerPage={limit}
                        totalItemsCount={count}
                        hideNavigation={true}
                        hideFirstLastPages={true}
                        onChange={articles.setArticlesPage} 
                    />

                </div>

            </div>

    );
    
}

export default ArticlesHeader;

