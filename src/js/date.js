export function printDate() {
  const date = new Date();

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const fullDate = `${year}/${month}/${day}`;
  console.log(fullDate);
}
