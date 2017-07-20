import React, { Component } from 'react';

class LeftBar extends Component {
  render() {
    return (
      <div className="info-bar">
        <div className="info-bar-item vertical" id="about-me">
          <img className="info-bar-subitem image" src="me.jpg"></img>
          <div className="info-bar-subitem vertical center">
            <div className="info-bar-text text-header"
              id="my-name">
              Lee Haugen
            </div>
            <div className="info-bar-text"
              id="my-desc">
              Software Developer
            </div>
          </div>
        </div>
        <div className="info-bar-item horizontal" id="fa-links">
          <a href="mailto:haugenlee@gmail.com">
            <i className="fa fa-envelope-square info-bar-subitem" aria-hidden="true"></i>
          </a>
          <a href="github.com/leegenes">
            <i className="fa fa-github-square info-bar-subitem" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/haugenlee/">
            <i className="fa fa-linkedin-square info-bar-subitem" aria-hidden="true"></i>
          </a>
      </div>
      </div>
    );
  }
}

export default LeftBar;
