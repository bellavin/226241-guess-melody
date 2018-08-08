'use strict';

const Arrow = {
  RIGHT: 37,
  LEFT: 39
};

const mainElement = document.querySelector(`.main`);

const updateScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
  map((it) => it.content);

let current = 0;
const changeScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  updateScreen(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Arrow.RIGHT:
      changeScreen(current + 1);
      break;
    case Arrow.LEFT:
      changeScreen(current - 1);
      break;
  }
});

const arrowsTemplate = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;

const main = document.querySelector(`.app`);
main.insertAdjacentHTML(`beforeEnd`, arrowsTemplate);

const arrowsWrap = main.querySelector(`.arrows__wrap`);
const leftArrow = arrowsWrap.querySelector(`.arrows__btn:first-of-type`);
const rightArrow = arrowsWrap.querySelector(`.arrows__btn:last-of-type`);

leftArrow.addEventListener(`click`, () => {
  changeScreen(current - 1);
});

rightArrow.addEventListener(`click`, () => {
  changeScreen(current + 1);
});

changeScreen(0);
