import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { fetchWeather } from "./weather.js";

const key = import.meta.env.VITE_VISUALCROSSING_KEY;
const city = "tokyo";

setFavicon(Parasol, "#fafafa");
fetchWeather(city, key);
