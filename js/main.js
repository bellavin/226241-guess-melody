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


const createArrow = (textContent) => {
  const arrow = document.createElement(`button`);
  arrow.classList.add(`arrows__btn`);
  arrow.textContent = textContent;
  // arrow.style.background = `none`;
  arrow.style.background = `white`;
  arrow.style.border = `2px solid black`;
  arrow.style.padding = `5px 20px`;

  return arrow;
};


const createArrowsWrap = (parentNode) => {
  const wrap = document.createElement(`div`);
  wrap.classList.add(`arrows__wrap`);

  wrap.style.position = `absolute`;
  wrap.style.top = `135px`;
  wrap.style.left = `50%`;
  wrap.style.marginLeft = `-56px`;

  parentNode.appendChild(wrap);

  return wrap;
};

const main = document.querySelector(`main.app`);
const arrowsWrap = createArrowsWrap(main);

const leftArrow = createArrow(`<-`);
const rightArrow = createArrow(`->`);
arrowsWrap.appendChild(leftArrow);
arrowsWrap.appendChild(rightArrow);

leftArrow.addEventListener(`click`, (evt) => {
  select(current - 1);
});

rightArrow.addEventListener(`click`, (evt) => {
  select(current + 1);
});

select(0);
