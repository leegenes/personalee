import React, { Component } from 'react';
import Blog from './Blog';
import Projects from './Projects';

const ViewToDisplay = (props) => {
  if (props.selectedView === "blog") {
    return <Blog blogPosts={props.blogPosts} />
  }
  if (props.selectedView === "projects") {
    return <Projects projects={props.projects} />
  }
  return <div></div>
}

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedView: "projects"};
    this.handleClick = this.handleClick.bind(this);
  };

  render() {
    return (
      <div className="main-view view container vertical">
        <div className="container horizontal" id="filter-options">
          <div className="filter-option header"
            id="filter-projects"
            onClick={() => this.handleClick("projects")}>
            Projects
          </div>
          <a href="./resume.html" className="filter-option container header"
            id="filter-blog">
            Resumé
          </a>
        </div>
        <ViewToDisplay
          selectedView={this.state.selectedView}
          blogPosts={ this.props.blogPosts }
          projects={ this.props.projects} />
      </div>
    )
  }
  handleClick(clickedView) {
    this.setState({selectedView: clickedView});
  }
}
export default View;
