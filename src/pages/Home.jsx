import React from "react";
import "../css/Home.css";
import WeatherCard from "../components/WeatherCard";

/*
Requirements:
 - location header
 - temperature + weather cards
 - hourly temperature (across the day)
 - 7 day temperature
 - extras(AQ, UV, Pollen, Health (??))

 - component: mini weather cards to be displayed in hourly and 7 day temperature
*/

const Home = () => {
  return (
    <div className="container">
      <div id="location" className="section">
        Markham, Ontario
      </div>
      <div id="weather" className="section">
        Today's weather
        <WeatherCard />
      </div>
      <div id="hourly" className="section">
        Hourly Weather
      </div>
      <div id="weekly" className="section">
        Weekly Weather
      </div>
      <div id="extras" className="section">
        Extras
      </div>
    </div>
  );
};

export default Home;
