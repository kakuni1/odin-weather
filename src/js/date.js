export function getYearMonthDay() {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${year}/${month}/${day}`;
}

export function getMonthDay() {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${month}/${day}`;
}

export function getYear() {
  const date = new Date();
  const year = date.getUTCFullYear();
  return `${year}`;
}

export function getMonth() {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  return `${month}`;
}

export function getDay() {
  const date = new Date();
  const day = date.getUTCDate();
  return `${day}`;
}
