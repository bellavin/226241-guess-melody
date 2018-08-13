const mainElement = document.querySelector(`.main`);

export const renderScreen = (template) => {
  return template.cloneNode(true);
};

export const updateScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
