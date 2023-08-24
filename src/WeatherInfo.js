import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li className="weather-details">
              Humidity: {props.data.humidity}%
            </li>
            <li className="weather-details">
              Wind: {Math.round(props.data.wind)}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
