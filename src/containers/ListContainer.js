import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticlesListActions from '../actions/getAction';
import ArticlesHead from '../components/ArticlesHead';


class ArticlesListContainer extends Component {

  constructor(props) {

    super(props);

    this.state = {
      activePage: 1,
      updatePage: true
    };

  }


  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }


  componentWillMount() {
    this.props.fetchArticles();
  };


  componentDidUpdate() {

    if (this.props.history.action === "PUSH" && this.state.updatePage === true) {
      this.props.fetchArticles();
      this.setState({updatePage: false});
    }

  }
 

  render() {

      return (      
        <ArticlesHead  {...this.props}/>    
      )
      
  }
}

export default connect(
  ({ articles }) => articles,
  ArticlesListActions,
)(ArticlesListContainer);