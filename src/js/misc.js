export function capitalize(word) {
  const first = new String(word).slice(0, 1).toUpperCase();
  const capWord = first + word.slice(1);
  return capWord;
}
