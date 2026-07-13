export function getCityTime(timezone) {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  });
}

export function getCityDate(timezone) {
  return new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    timeZone: timezone,
  });
}
