import React from "react";
import "../css/WeatherCard.css";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="cur-weather">
        <img
          className="atmo-img"
          src="C:\Users\mrcyr\OneDrive\Documents\js\react-weather-app\src\assets\rainy.png"
        ></img>
        <p className="cur-temp">11°</p>
      </div>
      <div className="weather-add">
        <p className="cur-atmo">Mostly cloudy</p>
        <p className="high-low">H: L:</p>
        <p className="feel-temp">Feels like 7°</p>
      </div>
    </div>
  );
};

export default WeatherCard;
