import {updateScreen, getRandomInt} from '../util.js';
import resultSuccess from './result-success.js';
import failTries from './fail-tries.js';
import welcomeScreen from './welcome.js';

const gameArtistTmp = document.querySelector(`#game-artist`).content;
const gameArtist = gameArtistTmp.querySelector(`.game--artist`);

const getRandomScreen = () => {
  const screenNum = getRandomInt(0, 1);
  if (screenNum === 0) {
    return resultSuccess;
  }
  return failTries;
};

const gameArtistBtn = gameArtist.querySelector(`.game__artist`);
gameArtistBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  const resultScreen = getRandomScreen();
  updateScreen(resultScreen);
});

const gameBackBtn = gameArtist.querySelector(`.game__back`);
gameBackBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreen);
});

export default gameArtist;
