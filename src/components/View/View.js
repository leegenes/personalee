import React, { Component } from 'react';
import Blog from './Blog';
import Projects from './Projects';

const ViewToDisplay = (props) => {
  if (props.selectedView === "blog") {
    return <Blog />
  }
  return <Projects />
}

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedView: "projects"};
    this.handleClick = this.handleClick.bind(this);
  };

  render() {
    console.log(this.state.selectedView);
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
          <ViewToDisplay selectedView={this.state.selectedView} />
      </div>
    )
  }
  handleClick(clickedView) {
    this.setState({selectedView: clickedView})
 }
}
export default View;
