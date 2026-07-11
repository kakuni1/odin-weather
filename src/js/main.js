import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { fetchWeather, getWeather } from "./weather.js";

const city = "tokyo";
const key = import.meta.env.VITE_VISUALCROSSING_KEY;

async function main() {
  // generate favicon from icon set & set color
  setFavicon(Parasol, "#fafafa");
  // uses api to receive weather data
  // returns as an object
  const weatherData = await fetchWeather(city, key);
  console.log(weatherData);

  // set # of days (weather data)
  const temp = getWeather(weatherData, 3);
  console.log(temp);
}

main();
