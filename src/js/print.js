import { createElement, Parasol } from "lucide";
import { getCityDate, getCityTime } from "./date.js";
import { getWeatherIcon } from "./icons.js";
import { capitalize } from "./misc.js";

export function printMainCard(data) {
  const weather = document.querySelector("#weather");
  const div = document.createElement("div");
  div.id = "main-card";

  const temp = document.createElement("p");
  temp.textContent = `${data.temp}°C | `;

  const weatherIcon = getWeatherIcon(data.icon);
  weatherIcon.classList.add("weather-icon");

  const condition = document.createElement("p");
  condition.textContent = data.condition;

  const cityZone = document.createElement("p");
  cityZone.textContent = `${capitalize(data.location)} | ${data.timezone.split("/")[0]}`;

  const dateTime = document.createElement("p");
  dateTime.textContent = `${getCityDate(data.timezone)} | ${getCityTime(data.timezone)}`;

  const top = document.createElement("div");
  top.append(temp, weatherIcon);
  top.classList.add("top-row");

  div.append(top, condition, cityZone, dateTime);
  weather.appendChild(div);
}

export function printHeader() {
  const headerIcon = createElement(Parasol);
  headerIcon.classList.add("header-icon");

  const header = document.querySelector(".header-h3");
  header.appendChild(headerIcon);
}
