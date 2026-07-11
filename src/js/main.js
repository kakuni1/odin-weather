import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { printMainCard } from "./print.js";
import { fetchWeather, getWeatherCurrent } from "./weather.js";

const city = "tokyo";
const key = import.meta.env.VITE_VISUALCROSSING_KEY;

async function main() {
  // generate favicon from icon set & set color
  setFavicon(Parasol, "#fafafa");
  // uses api to receive weather data
  // returns as an object
  const weatherData = await fetchWeather(city, key);
  console.log(weatherData);

  // get today's current weather (temp & icon)
  const currentData = getWeatherCurrent(weatherData);
  console.log(currentData);

  printMainCard(currentData);
}

main();
