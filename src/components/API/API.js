import React, { Component } from "react";

function CallType(props) {
  const type = props.type;
  const handleCall = props.handleCall;
  console.log(props);
  if(type !== 'coordinates') {
    handleCall("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + props.city + "&cnt=7&APPID=a83d7aa0296e6d9a171b032d1e34c4b5");
  } else {
    handleCall("http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=7");
  }
  return null;
}

class API extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint: null
    };
  }

  handleCall = (endpoint) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.handleWeatherData(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return ( <CallType city={ this.props.city } type={ 'city' } handleCall={ this.handleCall } /> );
  }

}

export default API;
