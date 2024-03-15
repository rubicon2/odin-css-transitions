import './style.css';

const { body } = document;

const buttonBar = document.createElement('div');
buttonBar.classList.add('button-bar');
body.appendChild(buttonBar);

const transitionButton = document.createElement('button');
transitionButton.classList.add('transition-button');
transitionButton.innerText = 'Transition!';
buttonBar.appendChild(transitionButton);

const animationButton = document.createElement('button');
animationButton.classList.add('animation-button');
// animationButton.innerText = 'Animation!';

const animationButtonText = document.createElement('div');
animationButtonText.classList.add('animation-button-text');
animationButtonText.innerText = 'Transition button, animate text!';
animationButton.appendChild(animationButtonText);

buttonBar.appendChild(animationButton);
