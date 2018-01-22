import React, { Component } from 'react';


class PostSection extends Component {

    constructor(props){
        super(props);
        this.submitPost = this.submitPost.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    submitPost(){
        this.props.post();
        this.refs.textField.value = "";
    }

    clearField(){
        this.props.clear();
        this.refs.textField.value = "";
    }

    render(){
        return(
            <div id="postsection">
                <section id="">
					<textarea ref="textField"
                              placeholder="Type text here.."
                              onChange={this.props.currentInput}
                    />
                    <br />
                    <button onClick={this.submitPost}>
                        Post
                    </button>
                    <button onClick={this.clearField}>
                        Clear
                    </button>
                </section>
            </div>
        );
    }
}

export default PostSection;