import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ArticleCreateActions  from '../actions/createAction';
import ArticleCreate from '../components/ArticleCreate';


class ArticlePostContainer extends Component {

  constructor(props) {

    super (props);

      this.state = {
        title: '',
        body: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }
  
 
  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });

  }


  handleSubmit = e => {

    e.preventDefault();

    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.props.history.push('/');
    }

  } 


  render() {

      return(

        <div>
          <ArticleCreate  {...this} />
        </div>
        
      )
  }
}

const mapDispatchToProps = dispatch => {

  return {
    
    onAddPost: post => {
      dispatch(ArticleCreateActions.fetchPostArticle(post));
    }

  };

};


export default connect(
  postArt => postArt,
  mapDispatchToProps,
)(ArticlePostContainer);