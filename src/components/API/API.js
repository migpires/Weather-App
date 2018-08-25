import React, { Component } from "react";

class API extends Component {

  const weatherByCity = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  const weatherByCoordinates = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

}

export default API;
