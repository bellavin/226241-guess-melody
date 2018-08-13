import {updateScreen} from '../util.js';
import gameArtist from './game-artist.js';
import welcomeScreen from './welcome.js';

const gameGenreScreenTmp = document.querySelector(`#game-genre`).content;
const gameGenreScreen = gameGenreScreenTmp.querySelector(`.game--genre`);

const gameBackBtn = gameGenreScreen.querySelector(`.game__back`);
const gameForm = gameGenreScreen.querySelector(`.game__tracks`);
const gameCheckoutBtns = Array.from(gameForm.querySelectorAll(`.game__input`));
const gameSubmitBtn = gameForm.querySelector(`.game__submit`);
gameSubmitBtn.disabled = true;

const verifyBtns = (elem) => {
  return elem.checked;
};

gameForm.addEventListener(`change`, (evt) => {
  gameSubmitBtn.disabled = gameCheckoutBtns.some(verifyBtns) ? false : true;

});

gameSubmitBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(gameArtist);
});

gameBackBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreen);
});

export default gameGenreScreen;
