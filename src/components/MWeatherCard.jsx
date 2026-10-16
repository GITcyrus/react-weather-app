//displays weather at each increment

import React from "react";
import "../css/MWeatherCard.css";
import rainy from "../assets/rainy.png";

const MWeatherCard = ({ weatherInfo }) => {
  return (
    <div className="mini-card">
      <p className="mini-time">{weatherInfo.time}</p>
      <img className="mini-atmo" src={rainy} />
      <p className="mini-temp">{weatherInfo.temp}°</p>
      <p className="mini-feels">Feels {weatherInfo.feels}°</p>
      <p className="mini-precip">Precip: {weatherInfo.precip}%</p>
    </div>
  );
};

export default MWeatherCard;
