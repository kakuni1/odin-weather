import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { printHeader, printMainCard } from "./print.js";
import { fetchWeather, getWeatherData } from "./weather.js";

// generate favicon from icon set & set color
setFavicon(Parasol, "#fafafa");
printHeader();

// load saved city, default to "tokyo"
const city = localStorage.getItem("savedCity") ?? "tokyo";
const key = import.meta.env.VITE_VISUALCROSSING_KEY;

async function showWeather(city) {
  const weatherData = await fetchWeather(city, key);
  if (!weatherData) return false;
  localStorage.setItem("savedCity", city);
  console.log(weatherData);

  // 0 for today
  const currentData = getWeatherData(weatherData, 0);
  console.log(currentData);

  const exists = document.querySelector("#main-card");
  if (exists) exists.remove();
  printMainCard(currentData);
  return true;
}

async function inputSetup() {
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

showWeather(city);
inputSetup();
