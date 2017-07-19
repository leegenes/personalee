import React, { Component } from 'react';


const Project = (props) => {
  return (
    <div className="project-container vertical center">
      <div className="project-title">{ props.project.title}</div>
      <img className="project-image" src={ props.project.photoURL }></img>
      <p className="project-desc">{ props.project.description }</p>
    </div>
  )
}

const ProjectList = (props) => {
  const projectItems = Object.keys(props.projects).map((key) => {
    return (
      <Project project={ props.projects[key] }/>
    )
  })

  return (
    <div className="content-container tiles">
      { projectItems }
    </div>
  )
}

class Projects extends Component {
  render () {
    return (
      <ProjectList projects={ this.props.projects } />
    )
  }
}
export default Projects;
