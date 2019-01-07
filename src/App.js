import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const logo = require('./images/sk.png');
const git = require('./images/github.png');
const linkedin = require('./images/linkedin.png');



class App extends Component {
  render() {
    return (
      <div className='splash-container'>
        Sameeh Khan

        Full-Stack Developer

        <img className='logo' src={logo} />
        <img className='git'src={git} />
        <img className='linkedin'src={linkedin} />
      </div>
    );
  }
}

export default App;
