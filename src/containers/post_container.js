import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postNewText  } from '../actions/index-action'
import PostComponent from '../components/postsection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.inputText = this.inputText.bind(this);
        this.postButton = this.postButton.bind(this);
        this.clearButton = this.clearButton.bind(this);
        this.state = {
            userInput:{
                id: 0,
                text: ""
            }

        };
    }

    inputText(e){
        this.setState({
            userInput:{
                id: (this.props.feedList.length - 1) + 1,
                text:  e.target.value
            }
        });

    }

    postButton() {
        const newPost = this.state.userInput;
        this.props.postNewText(newPost, this.props.feedList);
    }

    clearButton() {
        this.setState({
            text: ""
        });
    }



    render() {
        return(
            <PostComponent
                currentInput={this.inputText}
                post={this.postButton}
                clear={this.clearButton}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        feedList: state.feeds
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({postNewText: postNewText}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostContainer);