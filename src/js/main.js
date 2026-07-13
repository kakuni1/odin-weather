import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { printMainCard } from "./print.js";
import { fetchWeather, getWeatherData } from "./weather.js";

// generate favicon from icon set & set color
setFavicon(Parasol, "#fafafa");

const defaultCity = "tokyo";
const key = import.meta.env.VITE_VISUALCROSSING_KEY;

async function showWeather(city) {
  const weatherData = await fetchWeather(city, key);
  if (!weatherData) return false;

  // 0 for today
  const currentData = getWeatherData(weatherData, 0);

  const exists = document.querySelector("#main-card");
  if (exists) exists.remove();
  printMainCard(currentData);
  return true;
}

async function setup() {
  const submit = document.querySelector("#form");
  submit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#city-input");
    const city = input.value.trim();
    if (!city) return;

    const success = await showWeather(city);
    if (!success) {
      input.classList.add("error");
      return;
    }
    input.classList.remove("error");
  });
}

showWeather(defaultCity);
setup();
