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
          <div><img className='logo' src={logo} /></div>
          <div className='info'>
            <div>Sameeh Khan</div>
            <div>Full-Stack Developer</div>
          </div>
          <div className='links'>
            <div><a href='https://github.com/sameehkhan'><img className='git' src={git} /></a></div>
            <div><a href='https://www.linkedin.com/in/sameeh-khan-877657b4/'><img className='linkedin' src={linkedin} /></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
