import React, { Component } from 'react';
import Button from '@material/react-button/dist'; // /index.js is implied
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <h1>If this looks red then SASS test is succeed!</h1>
        </p>
        <div>
          <Button
            raised
            className='button-alternate'
            onClick={() => console.log('clicked!')}
          >
            Click Me!
          </Button>
      </div>
      <div>
          Weather icons test
          <div>
            <i className="wi wi-night-sleet"></i>
            <i className="wi wi-day-sunny"></i>
            <i className="wi wi-day-fog"></i>
            <i className="wi wi-day-rain"></i>
            <i className="wi wi-day-snow-wind"></i>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
