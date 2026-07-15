import { createElement, Parasol, Sunrise, Sunset, Thermometer } from "lucide";
import { getCityDate, getCityTime } from "./date.js";
import { getWeatherIcon } from "./icons.js";
import { capitalize } from "./misc.js";

export function printCurrentCard(data) {
  const weather = document.querySelector("#card-current");
  weather.innerHTML = "";

  const temp = document.createElement("p");
  temp.textContent = `${data.temp}°C | `;

  const weatherIcon = getWeatherIcon(data.icon);
  weatherIcon.classList.add("lucide-icon");

  const condition = document.createElement("p");
  condition.textContent = data.condition;

  const cityZone = document.createElement("p");
  cityZone.textContent = `${capitalize(data.location)} | ${data.timezone.split("/")[0]}`;

  const dateTime = document.createElement("p");
  dateTime.textContent = `${getCityDate(data.timezone)} | ${getCityTime(data.timezone)}`;

  const top = document.createElement("div");
  top.append(temp, weatherIcon);
  top.classList.add("row");

  weather.append(top, condition, cityZone, dateTime);
}

export function printTodayCard(data) {
  const weather = document.querySelector("#card-today");
  weather.innerHTML = "";

  const tempRange = document.createElement("div");
  tempRange.classList.add("row");
  const thermIcon = createElement(Thermometer);
  thermIcon.classList.add("lucide-icon");
  const tempMin = document.createElement("p");
  tempMin.textContent = `${data.tempMin}°C - `;
  const tempMax = document.createElement("p");
  tempMax.textContent = `${data.tempMax}°C`;
  tempRange.append(thermIcon, tempMin, tempMax);

  const cloudCover = document.createElement("p");
  cloudCover.textContent = `Cloud cover ${data.cloudcover}`;

  const precip = document.createElement("p");
  precip.textContent = `Precipitation ${data.precip}`;

  const sunrise = document.createElement("div");
  sunrise.classList.add("row");
  const sunriseIcon = createElement(Sunrise);
  sunriseIcon.classList.add("lucide-icon");
  const sunriseText = document.createElement("p");
  sunriseText.textContent = `Sunrise ${data.sunrise.slice(0, 5)}`;
  sunrise.append(sunriseIcon, sunriseText);

  const sunset = document.createElement("div");
  sunset.classList.add("row");
  const sunsetIcon = createElement(Sunset);
  sunsetIcon.classList.add("lucide-icon");
  const sunsetText = document.createElement("p");
  sunsetText.textContent = `Sunset \u00A0${data.sunset.slice(0, 5)}`;
  sunset.append(sunsetIcon, sunsetText);

  weather.append(tempRange, cloudCover, precip, sunrise, sunset);
}

export function printHeader() {
  const headerIcon = createElement(Parasol);
  headerIcon.classList.add("header-icon");

  const header = document.querySelector(".header-h3");
  header.appendChild(headerIcon);
}
