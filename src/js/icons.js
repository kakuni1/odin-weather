import {
  Bug,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  createElement,
  Moon,
  Snowflake,
  Sun,
  Wind,
} from "lucide";

const iconMap = {
  "clear-day": Sun,
  "clear-night": Moon,
  cloudy: Cloud,
  fog: CloudFog,
  "partly-cloudy-day": Cloud,
  "partly-cloudy-night": Cloud,
  rain: CloudRain,
  "showers-day": CloudDrizzle,
  "showers-night": CloudDrizzle,
  snow: Snowflake,
  "snow-showers-day": Snowflake,
  "snow-showers-night": Snowflake,
  "thunder-rain": CloudLightning,
  "thunder-showers-day": CloudLightning,
  "thunder-showers-night": CloudLightning,
  wind: Wind,
};

export function getWeatherIcon(condition) {
  const key = condition;
  const iconComponent = iconMap[key] ?? Bug;
  return createElement(iconComponent);
}
