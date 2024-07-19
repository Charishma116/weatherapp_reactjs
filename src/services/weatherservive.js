import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from './weatherService';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const location = 'New York'; // Example location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div>
      {/* Render weather data */}
    </div>
  );
}

export default WeatherComponent;
