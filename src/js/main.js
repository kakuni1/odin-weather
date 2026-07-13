import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { printMainCard } from "./print.js";
import { fetchData, getWeatherCurrent } from "./weather.js";

// generate favicon from icon set & set color
setFavicon(Parasol, "#fafafa");

const key = import.meta.env.VITE_VISUALCROSSING_KEY;

async function setup() {
  const submit = document.querySelector("#form");
  submit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#city-input");
    const city = input.value.trim();
    if (!city) return;

    // uses api to receive weather data
    // returns as an object
    const weatherData = await fetchData(city, key);
    if (!weatherData) {
      input.classList.add("error");
      return;
    }

    input.classList.remove("error");
    console.log(weatherData);

    // get today's current weather (temp & icon)
    const currentData = getWeatherCurrent(weatherData);
    console.log(currentData);

    // print today's current weather onto page
    // print card if no card, if card delete then print
    const exists = document.querySelector("#main-card");
    if (exists) exists.remove();
    printMainCard(currentData);
  });
}

async function init() {
  // initialize default state
  const city = "tokyo";

  const weatherData = await fetchData(city, key);
  console.log(weatherData);

  const currentData = getWeatherCurrent(weatherData);
  console.log(currentData);

  printMainCard(currentData);
}

init();
setup();
