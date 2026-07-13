import { getCityDate, getCityTime } from "./date.js";
import { getWeatherIcon } from "./icons.js";
import { capitalize } from "./misc.js";

export function printMainCard(data) {
  const weather = document.querySelector("#weather");
  const div = document.createElement("div");
  div.id = "main-card";

  const temp = document.createElement("p");
  temp.textContent = `${data.temp}°C`;

  const icon = getWeatherIcon(data.icon);
  icon.classList.add("weather-icon");

  const condition = document.createElement("p");
  condition.textContent = data.condition;

  const city = document.createElement("p");
  city.textContent = capitalize(data.location);

  const time = document.createElement("p");
  time.textContent = getCityTime(data.timezone);

  const day = document.createElement("p");
  day.textContent = getCityDate(data.timezone);

  const top = document.createElement("div");
  top.append(temp, icon);
  top.classList.add("top-row");

  div.append(top, condition, city, time, day);
  weather.appendChild(div);
}
