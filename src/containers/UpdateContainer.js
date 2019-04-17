import React, {Component} from 'react';
import ArticleUpdate  from '../components/ArticleUpdate';
import ArticlesUpdateActions from '../actions/updateAction';
import { connect } from 'react-redux';


class ArticleUpdateContainer extends Component {
    
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
    

    handleSubmit = (e) => {

        e.preventDefault();

        let {match, updatePost, history} = this.props;

        if (this.state.title.trim() && this.state.body.trim()) {
            updatePost(match.params.id, this.state);
            history.push('/');
        }  

    }


    render() {

      return (

        <ArticleUpdate {...this} />

        );

    }

}

const mapDispatchToProps = dispatch => {

    return {

        updatePost: (id, state) => {
            dispatch(ArticlesUpdateActions.fetchUpdateArticle(id, state));
        }

    };

};

export default connect(
    updateArt => updateArt,
    mapDispatchToProps,
)(ArticleUpdateContainer);