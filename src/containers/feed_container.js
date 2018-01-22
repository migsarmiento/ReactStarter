import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedComponent from '../components/feedsection';

class FeedContainer extends Component {

    constructor(props){
        super(props);
        this.displayFeeds = this.displayFeeds.bind(this);
        this.state = {  newFeeds: []    }
    }

    componentWillMount(){
        this.setState({
            newFeeds: this.props.feedList
        });
    }

    componentWillReceiveProps(nextProps){
            this.setState({
                newFeeds: this.props.feedList
            });
    }


    displayFeeds(){
        return this.state.newFeeds.map((newFeeds) => {
            return (
                <li key={newFeeds.id}>
                    {newFeeds.text}
                </li>
            );
        });
    }

    render(){
        return(
            <FeedComponent displayFeedList={this.displayFeeds} />
        );
    }
}

function mapStateToProps(state) {
    return {
        feedList: state.feeds
    };
}

export default connect(mapStateToProps)(FeedContainer);