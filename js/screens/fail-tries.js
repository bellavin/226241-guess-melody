import {updateScreen} from '../util.js';
import welcomeScreen from './welcome.js';

const failTriesTmp = document.querySelector(`#fail-tries`).content;
const failTries = failTriesTmp.querySelector(`.result`);

const replayBtn = failTries.querySelector(`.result__replay`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreen);
});

export default failTries;
