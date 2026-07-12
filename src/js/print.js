import { getWeatherIcon } from "./icons";
import { capitalize } from "./misc";

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

  const top = document.createElement("div");
  top.append(temp, icon);
  top.classList.add("top-row");

  div.append(top, condition, city);
  weather.appendChild(div);
}
