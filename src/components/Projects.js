import React, { Component } from 'react';

const Tool = (props) => {
  return (
    <text className="project-tool small">
      { props.toolName }
    </text>
  )
}

const ToolList = (props) => {
  if (!props.tools) {
    return (
      <div></div>
    )
  }
  const toolItems = Object.keys(props.tools).map((key) => {
    return (
      <Tool toolName={ props.tools[key] } />
    )
  })

  return (
    <div className="project-tools container">
      { toolItems }
    </div>
  )
}


const Project = (props) => {
  return (
    <div className="project container vertical">
      <text className="project-info title header">{ props.project.title}</text>
      <a className="image-link" href={props.externalURL}>
        <img className="project-info image" src={ props.project.photoURL }></img>
      </a>
      <div className="project-info container vertical">
        <text className="project-desc">{ props.project.description }</text>
        <div className="project-meta container">
          <text className="git-link bordered">
            <a href={ props.project.gitURL }>
              <i className="fa fa-github" aria-hidden="true"></i> See it on Github
            </a>
          </text>
          <ToolList tools={ props.project.tools } />
        </div>
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
