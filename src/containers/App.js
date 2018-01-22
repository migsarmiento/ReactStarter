import React, { Component } from 'react';
import PostContainer from './post_container';
import FeedContainer from './feed_container';
/** Disable the css, I haven't configure the css properly, not sure 
if I have to install css in npm or configure css in webpack **/ 
//require('../styles/App.css');

class App extends Component {
  render() {
    return (
        <div id="app-main">
            <PostContainer />
            <FeedContainer />
        </div>
    );
  }
}

export default App;
