import { geoUrl, weatherUrl } from "./api.js";

export async function fetchData(city, key) {
  const geo = await fetchGeo(city);
  const weather = await fetchWeather(city, key);
  return { country: geo.results[0].country, weather };
}

export function getWeatherCurrent(data) {
  // get today's current weather (temp & icon)
  // return as an object
  return getWeather(data.weather, 1, data.country)[0];
}

async function fetchGeo(city) {
  try {
    const geo = await fetch(geoUrl(city));
    errorCheck(geo);
    return await geo.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchWeather(city, key) {
  try {
    const weather = await fetch(weatherUrl(city, key));
    errorCheck(weather);
    return await weather.json();
  } catch (error) {
    console.error(error);
  }
}

function getWeather(data, days, country) {
  // receive weather data from api
  // reduce from 14 days -> set # of days
  // send back with other data
  return data.days.slice(0, days).map((day) => ({
    location: data.resolvedAddress,
    timezone: data.timezone,
    country: country,
    temp: Math.round(day.temp),
    condition: day.conditions,
    icon: day.icon,
  }));
}

function errorCheck(name) {
  if (!name.ok) throw new Error(`http:${name.status} ${name.statusText}`);
}
