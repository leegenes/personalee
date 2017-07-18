import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item vertical" id="about-me">
          <img src="https://www.fillmurray.com/g/300/300"></img>
          <div className="about-words vertical">
            <div id="my-name">Lee Haugen</div>
            <div id="my-desc">Software Developer</div>
          </div>
        </div>
        <div className="nav-item horizontal" id="fa-links">
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
          <i className="fa fa-github-square" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Navigation;
