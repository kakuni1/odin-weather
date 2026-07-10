import { Cloud, createIcons, Sun } from "lucide";
import { fetchWeather } from "./weather.js";

createIcons({ icons: { Sun, Cloud } });
fetchWeather();
