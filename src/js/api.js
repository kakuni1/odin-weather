export function weatherUrl(city, key) {
  const url = new URL(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      encodeURIComponent(city),
  );
  url.search = new URLSearchParams({
    unitGroup: "metric",
    include: "days",
    key,
    contentType: "json",
  }).toString();
  return url;
}
