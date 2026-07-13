import { weatherUrl } from "./api.js";

export async function fetchWeather(city, key) {
  try {
    const weather = await fetch(weatherUrl(city, key));
    errorCheck(weather);
    return await weather.json();
  } catch (error) {
    console.error(error);
  }
}

export function getWeatherData(data, numberOfDays) {
  const day = data.days[numberOfDays];
  return {
    location: data.resolvedAddress,
    timezone: data.timezone,
    temp: Math.round(day.temp),
    condition: day.conditions,
    icon: day.icon,
  };
}

function errorCheck(name) {
  if (!name.ok) throw new Error(`http:${name.status} ${name.statusText}`);
}
