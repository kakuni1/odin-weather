import { weatherUrl } from "./api.js";

const CITY = "tokyo";
const KEY = import.meta.env.VITE_VISUALCROSSING_KEY;

export async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl(CITY, KEY));
    if (!response.ok)
      throw new Error(`http:${response.status} ${response.statusText}`);
    const data = await response.json();
    printWeather(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function printWeather(data) {
  const weather = document.querySelector("#weather");
  for (const day of data.days.slice(0, 5)) {
    const dayElement = document.createElement("div");
    dayElement.className = "weather-card";
    const dayTemperature = document.createElement("p");
    dayTemperature.textContent = `max: ${day.tempmax} °C`;
    dayElement.appendChild(dayTemperature);
    weather.appendChild(dayElement);
  }
}
