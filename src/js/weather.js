import { weatherUrl } from "./api.js";

export function getWeather(data, days) {
  return data.days.slice(0, days).map((day) => ({
    temp: Math.round(day.temp),
    icon: day.icon,
  }));
}

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
