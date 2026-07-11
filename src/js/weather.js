import { weatherUrl } from "./api.js";

export async function fetchWeather(city, key) {
  try {
    const response = await fetch(weatherUrl(city, key));
    if (!response.ok)
      throw new Error(`http:${response.status} ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function getWeatherCurrent(data) {
  // get today's current weather (temp & icon)
  // return as an object
  return getWeather(data, 1)[0];
}

function getWeather(data, days) {
  // receive weather data from api
  // reduce from 14 days -> set # of days
  // send back with icon name
  return data.days.slice(0, days).map((day) => ({
    location: data.resolvedAddress,
    temp: Math.round(day.temp),
    condition: day.conditions,
    icon: day.icon,
  }));
}
