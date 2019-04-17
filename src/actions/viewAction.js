import axios from 'axios';


let ArticleViewActions = {

    viewArticle: (data) => ({

        type: 'VIEW_ARTICLE',
        payload: data

    }),

    fetchViewArticle: (id) => dispatch => {

        axios.get(`http://localhost:8080/v1/articles/${id}`)

          .then((res) => {
            dispatch(ArticleViewActions.viewArticle(res.data))        
          })

          .catch( er => {throw(er)})
        
    }

}

export default ArticleViewActions;

