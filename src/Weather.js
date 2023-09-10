import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  function handleEvent(event) {
    event.preventDefault();
    getAPI();
  }
  function updateMessage(response) {
  
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });
    console.log(response.data);
    setLoaded(true);
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  function getAPI() {
    let apiKey = `ebef9ca4a8de66ed586fac628fade056`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(updateMessage);
  }
  let form = (
    <form onSubmit={handleEvent}>
      <input type="search" onChange={getCity} />
      <input type="submit" className="btn btn-primary" value="Enter" />
    </form>
  );
  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul className="ul-list">
          <li>{`Temperature: ${Math.round(weather.temperature)} °C`}</li>
          <li>{`Description: ${weather.description}`}</li>
          <li>{`Humidity: ${weather.humidity}%`}</li>
          <li>{`Wind: ${weather.wind} kmH`}</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
