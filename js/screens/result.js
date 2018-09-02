import {updateScreen, getElemFromTmp, getRandomInt} from '../util';
import welcomeScreenElem from './welcome';
import resultSuccessTmp from './result-success-tmp';
import failTriesTmp from './fail-tries-tmp';
import failTimeTmp from './fail-time-tmp';

const resultsTmps = [
  resultSuccessTmp(`3 минуты и 25 секунд`, `12 баллов (8 быстрых)`, `3 ошибки`, `Вы заняли 2 место из 10. Это лучше чем у 80% игроков`),
  failTriesTmp,
  failTimeTmp
];
const tmp = resultsTmps[getRandomInt(3)];

const screenElem = getElemFromTmp(tmp);

const replayBtn = screenElem.querySelector(`.result__replay`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreenElem);
});

export default screenElem;
