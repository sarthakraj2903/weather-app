import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "d42b2ab0394c04fbd4d21f12935b1ed1";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Debug: Log API key status
console.log("API_KEY loaded:", API_KEY ? "YES" : "NO");
console.log("API_KEY value:", API_KEY);

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch current weather"
    );
  }
};

export const fetchForecastByCity = async (city) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch forecast"
    );
  }
};

// Location-based weather functions (using lat/lon)
export const fetchWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch current weather by location"
    );
  }
};

export const fetchForecastByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch forecast by location"
    );
  }
};