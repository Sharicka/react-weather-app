import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Golden Spring" />
      </div>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
