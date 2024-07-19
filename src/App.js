import React, { useState } from 'react';
import './App.css'; // Import the main CSS file for styling

const App = () => {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e08408ee4c9e12ebcd323339870209fb&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      const currentDate = new Date();
      setWeatherData({
        cityName: data.name,
        country: data.sys.country,
        temperature: `${Math.round(data.main.temp)}°C`,
        description: data.weather[0].description,
        dateTime: currentDate.toLocaleString(),
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Event handler for search button click
  const handleSearch = () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
      fetchWeather(location);
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Weather App</h1>
      <div className="search-container">
        <input type="text" id="locationInput" className="city-input" placeholder="Enter a city" />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div className="weather-box">
          <h2 className="city-name">{weatherData.cityName}, {weatherData.country}</h2>
          <p className="temperature">{weatherData.temperature}</p>
          <p className="weather-description">{weatherData.description}</p>
          <p className="datetime">{weatherData.dateTime}</p>
        </div>
      )}
    </div>
  );
}

export default App;
