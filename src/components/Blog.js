import React, { Component } from 'react';
import * as Remarkable from 'remarkable';
import * as RemarkableRenderer from 'remarkable-react';

const PostHeader = (props) => {
  return (
    <div className="blog-header container vertical">
      <text className="blog-post-info header">
        {props.title}
      </text>
      <text className="blog-post-info header">
        {props.date}
      </text>
    </div>
  )
}

const PostContent = (props) => {
  var converter = new Remarkable();
  converter.renderer = new RemarkableRenderer();
  return (
    <text className="blog-post-content markdown">
      { converter.render(props.content) }
    </text>
  )
}

const Post = (props) => {
  return (
    <div className="blog-post container vertical">
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
    <div className="blog main-content container vertical">
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
