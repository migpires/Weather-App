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

function Template(props) {
  const data = props.data;
  const fahrenheit = props.fahrenheit;
  const handleClearCity = props.handleClearCity;
  const handleChangeUnits = props.handleChangeUnits;
  const getDayOfWeek = props.getDayOfWeek;
  const getMonth = props.getMonth;
  const getDayMonth = props.getDayMonth;
  const getYear = props.getYear;
  const getIcon = props.getIcon;
  if (props.data !== null) {
    return (
      <div>
        <div className="Detail-header">
          <div className="Detail-header-back"><a href="javascript:void(0)" onClick={ handleClearCity }><Icon>keyboard_backspace</Icon></a></div>
          <div className="Detail-header-city">{ data.name }</div>
          <div className="Detail-header-switch"><ShowUnits fahrenheit={ fahrenheit } /><Switch onChange={ handleChangeUnits( fahrenheit ) } /></div>
        </div>
        <div className="Detail-day">{ getDayOfWeek() + ", " + getMonth() + " " + getDayMonth() + " " + getYear() }</div>
        <div className="Detail-day-weather">{ data.weather[0].description }</div>
        <div className="Detail-details">
            <div className="Detail-details-temperature">
              <div>{ data.main.temp }<ShowUnits fahrenheit={ fahrenheit } /> <i className={ getIcon(data.weather[0].description) }></i></div>
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
    );
  }
  return null;
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

  getDayOfWeek = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
  }

  getMonth = () => {
    var d = new Date();
    var month = new Array(11);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[d.getMonth()];
  }

  getDayMonth = () => {
    var d = new Date();

    let day = d.getDate();
    if(day === 1){
      return day + "st";
    } else if (day === 2) {
      return day + "nd";
    } else if (day === 3){
      return day + "rd";
    } else {
      return day + "th";
    }
  }

  getYear = () => {
    var d = new Date();

    return d.getFullYear();
  }

  getIcon = (weather) => {
    if(weather === "broken clouds"){
      return "wi wi-cloudy";
    } else if (weather === "shower rain") {
      return "wi wi-rain";
    } else if (weather === "clear sky") {
      return "wi wi-day-sunny";
    } else if (weather === "few clouds") {
      return "wi wi-day-cloudy-high";
    } else {
      return "wi wi-snow";
    }
  }

  render() {
    return (
      <div className="Detail">
        <CallAPI
          data={ this.state.data }
          city={ this.props.city }
          type={ 'city' }
          handleWeatherData={ this.handleWeatherData }
          fahrenheit={ this.state.fahrenheit }
        />
        <Template
          data={ this.state.data }
          fahrenheit={ this.state.fahrenheit }
          handleClearCity={ this.handleClearCity }
          handleChangeUnits={ this.handleChangeUnits }
          getDayOfWeek={ this.getDayOfWeek }
          getMonth={ this.getMonth }
          getDayMonth={ this.getDayMonth }
          getYear={ this.getYear }
          getIcon={ this.getIcon }
        />
      </div>
    );
  }
}

export default Detail;
