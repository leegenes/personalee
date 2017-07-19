import React, { Component } from 'react';


const Post = (props) => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        {props.post.title}
      </div>
    </div>
    )
}

const PostList = (props) => {
  console.log("here?",props.posts.keys);
  const postItems = Object.keys(props.posts).map((key, i) => {
    return (
      <Post key={key} post={props.posts[key]} />
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
        <PostList posts={ this.props.posts } />
    )
  }

}
export default Blog;
