import React, { Component } from 'react';
import './App.css';
const logo = require('./images/sk.png');
const git = require('./images/github.png');
const linkedin = require('./images/linkedin.png');





class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <div className='splash-container'>
          <div className='logo-div'><div><img className='logo' src={logo} /></div></div>
          <div className='info'>
            <div className='name'><div>Sameeh Khan</div></div>
            <div className='developer'><div>Full-Stack Developer</div></div>
            <div className='developer'><div>Site in-progress</div></div>

            <div className='spinner'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="black">
              <circle cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
              <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
              </circle>
            </svg>
            </div>

          </div>
          <div className='links'>
            <div><a href='https://github.com/sameehkhan' className='link-tag'><img className='git' src={git} /></a></div>
            <div><a href='https://www.linkedin.com/in/sameeh-khan-877657b4/' className='link-tag'><img className='linkedin' src={linkedin} /></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
