import React, { Component } from 'react';
import Blog from './Blog';
import Projects from './Projects';

const ViewToDisplay = (props) => {
  if (props.selectedView === "blog") {
    return <Blog posts={props.blog.postInfo} />
  }
  if (props.selectedView === "projects") {
    return <Projects projects={props.projects} />
  }
  return <div></div>
}

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedView: null};
    this.handleClick = this.handleClick.bind(this);
  };

  render() {
    return (
      <div className="view-container vertical">
        <div className="view-filter-bar text-header horizontal">
          <div className="filter-option"
            onClick={() => this.handleClick("projects")}>
            Projects
          </div>
          <div className="filter-option"
            onClick={() => this.handleClick("blog")}>
            Blog
          </div>
        </div>
          <ViewToDisplay
            selectedView={this.state.selectedView}
            blog={ this.props.blog }
            projects={ this.props.projects} />
      </div>
    )
  }
  handleClick(clickedView) {
    this.setState({selectedView: clickedView});
  }
}
export default View;