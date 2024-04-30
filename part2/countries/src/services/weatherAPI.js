import axios from "axios";

const api_key = process.env.VITE_WEATHER_API_KEY
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
const iconURL = "https://openweathermap.org/img/wn/";

const getWeather = async (lat, lon) => {
  try {
    return await axios.get(`${baseURL}lat=${lat}&lon=${lon}&appid=${api_key}`);
  } catch (error) {
    console.log("Error while retrieving the weather", error);
  }
};

const getWeatherIcon = async (code) => {
  try {
    return await axios.get(`${iconURL}${code}@2x.png`);
  } catch (error) {
    console.log("Error while retrieving the weather icon");
  }
};

export default { getWeather, getWeatherIcon };
