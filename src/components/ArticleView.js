import React from 'react';
import { MDBContainer, MDBModal, MDBModalBody,
        MDBModalHeader, MDBModalFooter } from 'mdbreact';


const ArticleView = ( view ) => {

  let viewProp = view.props;
  
  return (

          <MDBContainer>

            <button type="button" className="ml-5 btn btn-outline-info btn-rounded waves-effect"
              onClick={ () => {
                view.toggle();
                viewProp.fetchViewArticle(viewProp.id);
                }
              }
            >View</button>

            <MDBModal isOpen={view.state.modal} toggle={view.toggle} centered size="lg">

              {viewProp.articles.article ? 
              <div>

                <MDBModalHeader className="pl-4" toggle={view.toggle}>{viewProp.articles.article.title}</MDBModalHeader>

                <MDBModalBody className="d-flex justify-content-start pb-5">
                  {viewProp.articles.article.body}
                </MDBModalBody>

                <MDBModalFooter className="d-flex justify-content-around">
                  
                    <div >Created:<span  className="text-primary">{viewProp.articles.article.createdAt}</span></div>
                    <div >Updated:<span  className="text-primary">{viewProp.articles.article.updatedAt}</span></div>
                  
                </MDBModalFooter>

              </div> : null
              }

            </MDBModal>
            
          </MDBContainer> 

  )

}

export default ArticleView;
