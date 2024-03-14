import './style.css';

const { body } = document;

const box = document.createElement('div');
box.classList.add('box');
body.appendChild(box);

function rangedRandomInt(min, max) {
  return Math.round(min + (max - min) * Math.random());
}

function randomRgb() {
  return `rgb(${rangedRandomInt(0, 255)}, ${rangedRandomInt(0, 255)}, ${rangedRandomInt(0, 255)})`;
}

setInterval(() => {
  box.style.backgroundColor = randomRgb();
}, 5000);
