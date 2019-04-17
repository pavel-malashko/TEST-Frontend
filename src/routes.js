import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlesListContainer from './containers/ListContainer';
import ArticlePostContainer from './containers/CreateContainer';
import ArticleUpdateContainer from './containers/UpdateContainer';
import NotFound from './components/NotFound';


class Routes extends Component {

    render() {
  
      return (

        <Router>
            
            <Switch>
                <Route path="/" exact component={ArticlesListContainer} /> 
                <Route path="/create/" component={ArticlePostContainer} />
                <Route path="/update/:id/" component={ArticleUpdateContainer} />
                <Route path="*" component={NotFound} />          
            </Switch>      
            
        </Router>

      )

    }

}

export default Routes;
     