import { getWeatherIcon } from "./icons";

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
  city.textContent = data.location;

  div.append(temp, icon, condition, city);
  weather.appendChild(div);
}
