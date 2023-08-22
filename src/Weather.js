import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Current Location" className="btn" />
          </div>
        </div>
      </form>
      <h1 className="current-city">Kingston</h1>
      <ul>
        <li className="date-time">Thursday 11:10am</li>
        <li className="temp-description">Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="weather icon"
            className="weather-icon"
          />
          <span className="temp">33</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li className="weather-details">Humidity: 20%</li>
            <li className="weather-details">Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
