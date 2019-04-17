import axios from 'axios';


let ArticleUpdateActions = {

    updateArticle: (data) => ({

        type: 'UPDATE_ARTICLE',
        payload: data

    }),

    fetchUpdateArticle: (id,  {title, body}) => dispatch => {

        axios.put(`http://localhost:8080/v1/articles/${id}`, {title, body})

          .then( () => {
            dispatch(ArticleUpdateActions.updateArticle()) 
          })

          .catch( er => {throw(er)})
        
    }

}

export default ArticleUpdateActions;