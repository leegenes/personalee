import React, { Component } from 'react';
import fire from '../../../fire';

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
      <div className="content-container vertical list">
        <div className="blog-post">
          <p className="blog-header">
            This is a blog post: Something that you will find worth reading
          </p>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-header">
            This is a blog post: Something that you will find worth reading
          </div>
        </div>

      </div>
    )
  }
}
export default Blog;
