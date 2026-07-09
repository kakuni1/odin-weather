import { weatherUrl } from "./api.js";

const CITY = "tokyo";
const KEY = import.meta.env.VITE_VISUALCROSSING_KEY;

export async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl(CITY, KEY));
    if (!response.ok)
      throw new Error(`http ${response.status} ${response.statusText}`);
    const data = await response.json();
    printWeather(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function printWeather(data) {
  const div = document.querySelector(".weather");
  const day = document.createElement("div");
  day.textContent = `temp: ${data.days[0].temp}`;
  div.appendChild(day);
}
