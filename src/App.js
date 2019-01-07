import React, { Component } from 'react';
import './App.css';
const logo = require('./images/sk.png');
const git = require('./images/github.png');
const linkedin = require('./images/linkedin.png');



class App extends Component {
  render() {
    return (
      <div className='splash-container'>
        <img className='logo' src={logo} />
        <div className='info'>
          <div>Sameeh Khan</div>
          <div>Full-Stack Developer</div>
        </div>
        <div className='links'>
        <a href='https://github.com/sameehkhan'><img className='git' src={git}/></a>
        <a href='https://www.linkedin.com/in/sameeh-khan-877657b4/'><img className='linkedin' src={linkedin}/></a>
        </div>
      </div>
    );
  }
}

export default App;
