import React from "react";
import "../css/Home.css";
import WeatherCard from "../components/WeatherCard";
import WeatherRange from "../components/WeatherRange";

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
        <WeatherRange
          increments={[
            { id: 0, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 1, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 2, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 3, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 4, time: "3pm", temp: 20, feels: 18, precip: 80 },
          ]}
        />
      </div>
      <div id="weekly" className="section">
        Weekly Weather
        <WeatherRange
          increments={[
            { id: 5, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 6, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 7, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 8, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 9, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 10, time: "3pm", temp: 20, feels: 18, precip: 80 },
            { id: 11, time: "3pm", temp: 20, feels: 18, precip: 80 },
          ]}
        />
      </div>
      <div id="extras" className="section">
        Extras
      </div>
    </div>
  );
};

export default Home;
