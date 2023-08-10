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
          <ul>
            <li className="weather-details">Humidity:%</li>
            <li className="weather-details">Wind:km/h</li>
          </ul>
        </div>
      </div>
      <p>
        This project was coded by{" "}
        <strong>
          <a href="https://www.instagram.com/f.o.o.d.with.m.e/">
            Sharicka Clarke
          </a>
        </strong>{" "}
        and is{" "}
        <a
          href="https://github.com/Sharicka/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        hosted on{" "}
        <a href="https://graceful-sherbet-90de15.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}
