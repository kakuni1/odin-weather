import { Parasol } from "lucide";
import { setFavicon } from "./icons.js";
import { fetchWeather } from "./weather.js";

setFavicon(Parasol, "#fafafa");
fetchWeather();
