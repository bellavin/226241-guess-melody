import {updateScreen} from '../util.js';
import welcomeScreenElem from './welcome.js';

const resultSuccessTmp = (time, score, fails, place) => `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${time} вы набрали ${score}, совершив ${fails}</p>
  <p class="result__text">${place}</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`;

const failTimeTmp = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const failTriesTmp = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const resultTmp = {
  success: resultSuccessTmp(`3 минуты и 25 секунд`, `12 баллов (8 быстрых)`, `3 ошибки`, `Вы заняли 2 место из 10. Это лучше чем у 80% игроков`),
  failTries: failTriesTmp,
  failTime: failTimeTmp
};

const replay = (replayBtn) =>
  replayBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    updateScreen(welcomeScreenElem);
  }
  );


export {resultTmp, replay};
