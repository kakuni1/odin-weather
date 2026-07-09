import { weatherUrl } from "./api.js";

const CITY = "tokyo";
const KEY = import.meta.env.VITE_VISUALCROSSING_KEY;

export async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl(CITY, KEY));
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}
