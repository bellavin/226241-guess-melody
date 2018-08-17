import {updateScreen, renderScreen} from '../util.js';
import {welcomeScreenEl} from './welcome.js';

const failTriesScreenTmp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Какая жалость!</h2>
<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

export const failTriesScreenEl = renderScreen(failTriesScreenTmp, `result`);

const replayBtn = failTriesScreenEl.querySelector(`.result__replay`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreenEl);
});
