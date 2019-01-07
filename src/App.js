import React, { Component } from 'react';
import './App.css';
const logo = require('../images/SK.png');



class App extends Component {
  render() {
    return (
      <div className='splash-container'>
        Sameeh Khan

        Full-Stack Developer

        <img src={logo} />
      </div>
    );
  }
}

export default App;
