import axios from 'axios';


let ArticlesListActions = {

    setArticles: (articles) => ({
        type: 'GET_ARTICLES',
        payload: articles.data
    }),

    fetchArticles:  () =>  dispatch => {

        axios.get(`http://localhost:8080/v1/articles${window.location.search}`)

            .then( data  => {    
                dispatch(ArticlesListActions.setArticles(data))
            })

            .catch( er => {throw(er)} 

    )},

    fetchArticlesPage:  () =>  dispatch => {

        axios.get(`http://localhost:8080/v1/articles${window.location.search}`)

        .then( page  => {    
            dispatch(ArticlesListActions.setArticlesPage(page))
        })

        .catch( er => { throw(er) }) 

    }, 

    setArticlesPage: (page) => ({

        type: 'GET_ARICLES_PAGE',
        payload: page

    })

        
        
}

export default ArticlesListActions;