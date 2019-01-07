import React, { Component } from 'react';
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
        <img src={git} />
        <img src={linkedin} />
      </div>
    );
  }
}

export default App;
