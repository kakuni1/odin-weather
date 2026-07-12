export function capitalize(word) {
  // split word -> seperate array slots
  // & capitalize first letter and rejoin
  return new String(word)
    .split(" ")
    .map((w) => {
      return w.slice(0, 1).toUpperCase() + w.slice(1);
    })
    .join(" ");
}
