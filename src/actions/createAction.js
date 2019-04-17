import axios from 'axios';


let ArticleCreateActions = {

    postArticle: (data) => ({

        type: 'POST_ARTICLE',
        payload : data

    }),

    fetchPostArticle: ( {title, body} ) =>  dispatch => {

        axios.post('http://localhost:8080/v1/articles', {title, body})

        .then( res => {    
            dispatch(ArticleCreateActions.postArticle(res.data))
        })

        .catch( er => {throw(er)} 
    )}

}

export default ArticleCreateActions;