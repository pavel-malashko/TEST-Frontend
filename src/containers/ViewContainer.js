import React, {Component} from 'react';
import  ArticleView  from '../components/ArticleView';
import ArticlesViewActions from '../actions/viewAction';
import { connect } from 'react-redux';

class ArticleViewContainer extends Component {
    
    state = {
      modal: false,
    }
    
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });

    }

    render() {

      return (

        <ArticleView {...this} />

        );
        
    }

}
    
export default connect(
  articles => articles,
  ArticlesViewActions,
)(ArticleViewContainer);
    