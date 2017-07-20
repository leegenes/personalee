import React, { Component } from 'react';
import * as Remarkable from 'remarkable';
import * as RemarkableRenderer from 'remarkable-react';

const PostHeader = (props) => {
  return (
    <div className="blog-header vertical text-header">
      <div className="blog-post-title">
        {props.title}
      </div>
      <div className="blog-post-date">
        {props.date}
      </div>
    </div>
  )
}

const PostContent = (props) => {
  var converter = new Remarkable();
  converter.renderer = new RemarkableRenderer();
  return (
    <div>
    { converter.render(props.content) }
    </div>
  )
}

const Post = (props) => {
  return (
    <div className="blog-post">
      <PostHeader
        title={props.post.title}
        date={props.post.dateCreated} />
      <PostContent content={props.post.content} />
    </div>
    )
}

const PostList = (props) => {
  console.log("here?",props.blogPosts.keys);
  const postItems = Object.keys(props.blogPosts).map((key, i) => {
    return (
      <Post key={key} post={props.blogPosts[key]} />
    )
  })

  return (
    <div className="content-container vertical list">
      { postItems }
    </div>
  )
}

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
        <PostList blogPosts={ this.props.blogPosts } />
    )
  }

}
export default Blog;
