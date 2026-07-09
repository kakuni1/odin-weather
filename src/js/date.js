export function getYearMonthDay() {
  const date = new Date();
  const year = String(date.getUTCFullYear());
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

export function getMonthDay() {
  const date = new Date();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${month}/${day}`;
}

export function getYear() {
  const date = new Date();
  const year = String(date.getUTCFullYear());
  return `${year}`;
}

export function getMonth() {
  const date = new Date();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${month}`;
}

export function getDay() {
  const date = new Date();
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day}`;
}
