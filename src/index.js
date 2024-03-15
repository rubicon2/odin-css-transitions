import './style.css';
import { rangedRandomInt, randomRgb } from './random';

const { body } = document;

const box = document.createElement('div');
box.classList.add('box');
body.appendChild(box);

setInterval(() => {
  box.style.backgroundColor = randomRgb();
}, 5000);
