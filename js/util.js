const mainElement = document.querySelector(`.main`);

export const renderScreen = (template, className) => {
  const wrapper = document.createElement(`section`);
  wrapper.className = className;
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const updateScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
