import React, { Component } from "react";

function CallType(props) {
  const type = props.type;
  const handleCall = props.handleCall;
  console.log(props);
  if(type !== 'coordinates') {
    handleCall("http://api.openweathermap.org/data/2.5/weather?q=" + props.city + "&units=metric&APPID=ca4ac610fd531bc282c1067eb6caf2e4");
  } else {
    handleCall("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139");
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
