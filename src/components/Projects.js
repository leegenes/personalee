import React, { Component } from 'react';



const Project = (props) => {
  return (
    <div className="project container vertical">
      <div className="project-info title header">{ props.project.title}</div>
      <a className="image-link" href={props.externalURL}>
        <img className="project-info image" src={ props.project.photoURL }></img>
      </a>
      <text className="project-info desc">{ props.project.description }</text>
      <div className="project-info tools">

      </div>
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
    <div className="projects main-content container vertical">
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
