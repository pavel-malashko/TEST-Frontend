let initialState = {
    page: '',
    limit: '',
    count: '',
    data: []
};


export default (state = initialState, action) => {

    let  { type, payload } = action;

    switch (type) {

        case 'GET_ARTICLES':

            return {
                ...state,               
                page: payload.page,
                limit: payload.limit,
                count: payload.count,
                data: payload.articles
            }

        case 'GET_ARICLES_PAGE':

            return {
                ...state,               
                page: payload        
            }

        case 'VIEW_ARTICLE':

            return {
                ...state,
                article: payload
            }

        case 'POST_ARTICLE':

            return {
                ...state,                             
                payload    
            }

        case 'UPDATE_ARTICLE':

            return {
                ...state,                             
                payload 
            }    

        default: return state;

    }
     
}