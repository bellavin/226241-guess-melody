import {updateScreen} from '../util.js';
import welcomeScreenElem from './welcome.js';

const resultTmp = {
  success: (time, score, fails, place) =>
`<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${time} вы набрали ${score}, совершив ${fails}</p>
  <p class="result__text">${place}</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`,

  failTries:
`<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`,

  failTime:
`<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`
};

const replay = (replayBtn) =>
  replayBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    updateScreen(welcomeScreenElem);
  });


export {resultTmp, replay};
