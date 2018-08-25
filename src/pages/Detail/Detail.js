import React, { Component } from "react";
//import API from '../components/API'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    //fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ca4ac610fd531bc282c1067eb6caf2e4")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

          console.log(this.state);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="Detail">
        <div>These are Weather Icons from Detail page!</div>
        <div>
          <i className="wi wi-night-sleet"></i>
          <i className="wi wi-day-sunny"></i>
          <i className="wi wi-day-fog"></i>
          <i className="wi wi-day-rain"></i>
          <i className="wi wi-day-snow-wind"></i>
        </div>
      </div>
    );
  }
}

export default Detail;
