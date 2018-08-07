'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mainElement = document.querySelector(`section.main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
  map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

const arrowsHTMLString = `<div class="arrows__wrap">
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

const main = document.querySelector(`main.app`);
main.insertAdjacentHTML(`beforeEnd`, arrowsHTMLString);

const arrowsWrap = main.querySelector(`.arrows__wrap`);
const leftArrow = arrowsWrap.querySelector(`.arrows__btn:first-of-type`);
const rightArrow = arrowsWrap.querySelector(`.arrows__btn:last-of-type`);

leftArrow.addEventListener(`click`, () => {
  select(current - 1);
});

rightArrow.addEventListener(`click`, () => {
  select(current + 1);
});

select(0);
