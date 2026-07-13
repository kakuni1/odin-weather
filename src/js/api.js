export function weatherUrl(city, key) {
  const url = new URL(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      encodeURIComponent(city),
  );
  url.search = new URLSearchParams({
    unitGroup: "metric",
    include: "days",
    iconSet: "icons2",
    key,
    contentType: "json",
  }).toString();
  return url;
}

export function geoUrl(city) {
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.search = new URLSearchParams({
    name: city,
    count: "1",
    language: "en",
    format: "json",
  }).toString();
  return url;
}
