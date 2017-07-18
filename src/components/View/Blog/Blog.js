import React, { Component } from 'react';
import fire from '../../../fire';
import './blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {postInfo: this.getPosts};
  }

  componentWillMount () {
    return fire.database().ref('/blogPosts').once('value').then(function(snapshot) {
      console.log()
    });

  }

  render() {
    return (
      <div className="content-container">
        BLOG WORDS
      </div>
    )
  }
}
export default Blog;
