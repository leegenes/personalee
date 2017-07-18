import React, { Component } from 'react';
import Blog from './Blog';
import Projects from './Projects';
import './view.css';

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
      <div className="home-container">
        <div className="home-header">
          <div className="home-header-opt"
            onClick={() => this.handleClick("projects")}>
            Projects
          </div>
          <div className="home-header-opt"
            onClick={() => this.handleClick("blog")}>
            Blog
          </div>
        </div>
        <div className="content-container">
          <ViewToDisplay selectedView={this.state.selectedView} />
        </div>
      </div>
    )
  }
  handleClick(clickedView) {
    this.setState({selectedView: clickedView})
 }
}
export default View;
