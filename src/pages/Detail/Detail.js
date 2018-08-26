import React, { Component } from "react";
import API from '../../components/API'
import Icon from '@material-ui/core/Icon';
import Switch from '@material-ui/core/Switch';

function CallAPI(props) {
  const data = props.data;
  if (data !== null) {
    return null;
  }
  return <API city={ props.city } type={ 'city' } handleWeatherData={ props.handleWeatherData } units={ props.fahrenheit } />
}

function ShowUnits(props) {
  const fahrenheit = props.fahrenheit;
  if(!fahrenheit){
    return 'ºC';
  }
  return 'ºF';
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fahrenheit: false
    };
  }

  handleWeatherData = (weatherData) => {
    this.setState({data: weatherData});
  }

  handleClearCity = () => {
    this.props.handleClearCity();
  }

  handleChangeUnits = (fahrenheit) => {
    console.log(fahrenheit);
    //this.setState({fahrenheit: !fahrenheit});
  }

  render() {
    return (
      <div className="Detail">
        <CallAPI data={ this.state.data } city={ this.props.city } type={ 'city' } handleWeatherData={ this.handleWeatherData } fahrenheit={ this.state.fahrenheit } />
        <div>
          <div className="Detail-header">
            <div className="Detail-header-back"><a href="javascript:void(0)" onClick={this.handleClearCity}><Icon>keyboard_backspace</Icon></a></div>
            <div className="Detail-header-city">Tallinn</div>
            <div className="Detail-header-switch"><ShowUnits fahrenheit={ this.state.fahrenheit } /><Switch onChange={ this.handleChangeUnits(this.state.fahrenheit) } /></div>
          </div>
          <div className="Detail-day">Tuesday, December 6th 2016</div>
          <div className="Detail-day-weather">Light snow</div>
          <div className="Detail-details">
              <div className="Detail-details-temperature">
                <div>4ºC <i className="wi wi-day-snow"></i></div>
              </div>
              <div className="Detail-details-stages">
                  <div className="Detail-details-stages-stage">
                    <div className="Detail-details-stages-stage-each">Morning</div>
                    <div className="Detail-details-stages-stage-temperature">5ºC</div>
                  </div>
                  <div className="Detail-details-stages-stage">
                    <div className="Detail-details-stages-stage-each">Day</div>
                    <div className="Detail-details-stages-stage-temperature">4ºC</div>
                  </div>
                  <div className="Detail-details-stages-stage">
                    <div className="Detail-details-stages-stage-each">Evening</div>
                    <div className="Detail-details-stages-stage-temperature">0ºC</div>
                  </div>
                  <div className="Detail-details-stages-stage">
                    <div className="Detail-details-stages-stage-each">Night</div>
                    <div className="Detail-details-stages-stage-temperature">-2ºC</div>
                  </div>
              </div>
          </div>
          <div className="Detail-week">
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Tuesday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-snow"></i></div>
              <div className="Detail-week-day-temperature">4ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Wednesday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-day-sunny"></i></div>
              <div className="Detail-week-day-temperature">-7ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Thursday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-snow"></i></div>
              <div className="Detail-week-day-temperature">0ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Friday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-rain"></i></div>
              <div className="Detail-week-day-temperature">3ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Saturday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-snow"></i></div>
              <div className="Detail-week-day-temperature">4ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Sunday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-snow"></i></div>
              <div className="Detail-week-day-temperature">-2ºC</div>
            </div>
            <div className="Detail-week-day">
              <div className="Detail-week-day-each">Monday</div>
              <div className="Detail-week-day-icon"><i className="wi wi-snow"></i></div>
              <div className="Detail-week-day-temperature">-2ºC</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
