import React, { Component } from 'react';

class LeftBar extends Component {
  render() {
    return (
      <div className="info-bar container" id="info-bar">
        <div className="container vertical" id="info-bar-sub-cont">
          <div className="info-bar-item container vertical" id="about-me">
            <img className="info-bar-item image" id="my-picture" src="me.jpg"></img>
            <div className="info-bar-item container vertical" id="my-info">
              <text className="info-bar-text header" id="my-name">
                Lee Haugen
              </text>
              <text className="info-bar-text" id="my-desc">
                Software Developer
              </text>
            </div>
          </div>
          <div className="info-bar-item container horizontal" id="fa-links">
            <a className="bio-link" href="mailto:haugenlee@gmail.com">
              <i className="fa fa-envelope-square info-bar-subitem" aria-hidden="true"></i>
            </a>
            <a className="bio-link" href="github.com/leegenes">
              <i className="fa fa-github-square info-bar-subitem" aria-hidden="true"></i>
            </a>
            <a className="bio-link" href="https://www.linkedin.com/in/haugenlee/">
              <i className="fa fa-linkedin-square info-bar-subitem" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftBar;
