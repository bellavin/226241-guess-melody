import {updateScreen} from '../util.js';
import welcomeScreen from './welcome.js';

const resultSuccessTmp = document.querySelector(`#result-success`).content;
const resultSuccess = resultSuccessTmp.querySelector(`.result`);

const replayBtn = resultSuccess.querySelector(`.result__replay`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreen);
});

export default resultSuccess;
