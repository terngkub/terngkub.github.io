import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My GitHub Page</h1>
        </header>
		<p className="App-intro">My name is Nattapol Kamolba and this is my github user page.<br/>It's underconstruction and will be completed soon.</p>
      </div>
    );
  }
}

export default App;
