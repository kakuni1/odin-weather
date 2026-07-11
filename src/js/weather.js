import { weatherUrl } from "./api.js";
import { getWeatherIcon } from "./icons.js";

const CITY = "tokyo";
const KEY = import.meta.env.VITE_VISUALCROSSING_KEY;

export async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl(CITY, KEY));
    if (!response.ok)
      throw new Error(`http:${response.status} ${response.statusText}`);
    const data = await response.json();
    printWeatherCards(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function printWeatherCards(data) {
  const weather = document.querySelector("#weather");
  for (const day of data.days.slice(0, 5)) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("weather-card");

    const dayTemperature = document.createElement("p");
    const maxTemperature = Math.round(day.tempmax);
    dayTemperature.textContent = `max: ${maxTemperature}°C`;
    const icon = getWeatherIcon(day.icon);
    icon.classList.add("weather-icon");

    dayElement.append(dayTemperature, icon);
    weather.appendChild(dayElement);
  }
}
