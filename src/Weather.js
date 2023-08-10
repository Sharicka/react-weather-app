import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="search-form">
          <form>
            <input
              type="search"
              className="form-control"
              placeholder="Enter a City"
            />
            <button type="submit" class="btn">
              Current Location
            </button>
          </form>
        </div>
        <div className="current-city">Kingston</div>
        <ul>
          <li className="date-time">Thursday 11:10am</li>
          <li className="temp-description">Clear Sky</li>
        </ul>
        <div className="weather-wrapper">
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="weather icon"
            />
            <div className="temp">
              <strong>33</strong>
              <span>°C</span>
            </div>
          </div>
          <div className="weather-details">
            <ul>
              Humidity: <li>59 %</li>
              Wind: <li>45 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
