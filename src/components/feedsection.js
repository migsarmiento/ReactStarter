import React, { Component } from 'react';


class Feeds extends Component {

    render(){
        return(
            <div id="feed-section-div">
                <section id="feedsection">
                    <h3>Feed Section</h3>
                    <ul>
                        {this.props.displayFeedList()}
                    </ul>
                </section>
            </div>
        );
    }
};

export default Feeds;