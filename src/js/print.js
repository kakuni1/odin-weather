import { getWeatherIcon } from "./icons";

export function printMainCard(data) {
  const weather = document.querySelector("#weather");
  const div = document.createElement("div");

  const temp = document.createElement("p");
  temp.textContent = `${data.temp}°C`;

  const icon = getWeatherIcon(data.icon);
  icon.classList.add("weather-icon");

  div.append(temp, icon);
  weather.appendChild(div);
}
