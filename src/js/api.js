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
