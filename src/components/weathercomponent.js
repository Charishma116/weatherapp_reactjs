import axios from 'axios';

const apiKey = 'e08408ee4c9e12ebcd323339870209fb
';

export const fetchWeatherData = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
