import React, { Component } from 'react';
//import Button from '@material/react-button/dist'; // /index.js is implied
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
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
