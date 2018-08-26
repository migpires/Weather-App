import React, { Component } from 'react';
import './App.css';

//Pages
import Home from './pages/Home'
import Detail from './pages/Detail'

function Page(props) {
  const city = props.city;
  const handleCity = props.handleCity;
  const handleClearCity = props.handleClearCity;
  if (city !== null) {
    return <Detail city={ city } handleClearCity={ handleClearCity } />;
  }
  return <Home handleCity={ handleCity } />;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {city: null};
  }

  handleCity = (cityValue) => {
    this.setState({city: cityValue});
  }

  handleClearCity = () => {
    this.setState({city: null});
  }

  render() {
    return (
      <div className="App">
        <div className="App-panel">
          <Page city={ this.state.city }  handleCity={ this.handleCity } handleClearCity ={ this.handleClearCity } />
        </div>
      </div>
    );
  }
}

export default App;
