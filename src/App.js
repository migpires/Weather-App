import React, { Component } from 'react';
import './App.css';

//Pages
import Home from './pages/Home'
import Detail from './pages/Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-panel">
          <Home></Home>
          <Detail></Detail>
        </div>
      </div>
    );
  }
}

export default App;
