import React from "react";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Local Weather</h1>
        <Weather />
      </header>
      This project was coded by{" "}
      <strong>
        <a href="https://www.instagram.com/f.o.o.d.with.m.e/">
          Sharicka Clarke
        </a>
      </strong>{" "}
      and is{" "}
      <a
        href="https://github.com/Sharicka/weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>{" "}
      hosted on <a href="https://fluffy-dolphin-a400ea.netlify.app/">Netlify</a>
    </div>
  );
}

export default App;
