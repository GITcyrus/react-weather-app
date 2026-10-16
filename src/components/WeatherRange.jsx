//displays weather over a certain amount of time

import React from "react";
import "../css/WeatherRange.css";
import MWeatherCard from "./MWeatherCard";

const WeatherRange = ({ increments }) => {
  return (
    <div className="weather-range">
      {increments.map((increment) => (
        <MWeatherCard weatherInfo={increment} key={increment.id} />
      ))}
    </div>
  );
};

export default WeatherRange;
