export const getElemFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper.firstElementChild;
};


const mainElem = document.querySelector(`.main`);
export const updateScreen = (elem) => {
  mainElem.innerHTML = ``;
  mainElem.appendChild(elem);
};


export const getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};
