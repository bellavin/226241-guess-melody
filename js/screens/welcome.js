import {updateScreen} from '../util.js';
import gameGenreScreen from './game-genre.js';

const welcomeScreenTmp = document.querySelector(`#welcome`).content;
const welcomeScreen = welcomeScreenTmp.querySelector(`.welcome`);

const welcomeBtn = welcomeScreen.querySelector(`.welcome__button`);
welcomeBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(gameGenreScreen);
});

export default welcomeScreen;
