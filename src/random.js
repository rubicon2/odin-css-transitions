export function rangedRandomInt(min, max) {
  return Math.round(min + (max - min) * Math.random());
}

export function randomRgb() {
  return `rgb(${rangedRandomInt(0, 255)}, ${rangedRandomInt(0, 255)}, ${rangedRandomInt(0, 255)})`;
}
