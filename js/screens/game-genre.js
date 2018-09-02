import {updateScreen, getElemFromTmp} from '../util';
import dataSongs from '../data/songs';
import welcomeScreenElem from './welcome';
import gameArtistScreenElem from './game-artist';
import gameHeaderTmp from './game-header-tmp';

const tmp = (songs) => `<section class="game game--genre">
  ${gameHeaderTmp}
  <section class="game__screen">
    <h2 class="game__title">Выберите инди-рок треки</h2>
    <form class="game__tracks">
    ${songs.map((song, answerNum) => `
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio>
            <source src="${song.src}" type="audio/mpeg">
          </audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-${answerNum + 1}">
          <label class="game__check" for="answer-${answerNum + 1}">Отметить</label>
        </div>
      </div>`).join(``)}
      <button class="game__submit button" type="submit" disabled>Ответить</button>
    </form>
  </section>
</section>`;

const screenElem = getElemFromTmp(tmp(dataSongs.slice(1, 5)));


const form = screenElem.querySelector(`.game__tracks`);

const playBtns = form.querySelectorAll(`.track__button`);
const audioElems = form.querySelectorAll(`audio`);
const resetBtnsToDefault = (audios, btns) => {
  audios.forEach((elem) => {
    elem.pause();
  });
  btns.forEach((btn) => {
    btn.className = `track__button track__button--play`;
  });
};

form.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`track__button`)) {
    evt.preventDefault();
    const playBtn = evt.target;
    const audioElem = playBtn.closest(`.track`).querySelector(`audio`);

    if (playBtn.classList.contains(`track__button--pause`)) {
      audioElem.pause();
      playBtn.className = `track__button track__button--play`;
    } else if (playBtn.classList.contains(`track__button--play`)) {
      resetBtnsToDefault(audioElems, playBtns);
      audioElem.play();
      playBtn.className = `track__button track__button--pause`;
    }
  }
});


const checkBtns = Array.from(form.answer);
const submitBtn = form.querySelector(`.game__submit`);
form.addEventListener(`change`, (evt) => {
  evt.preventDefault();
  submitBtn.disabled = !checkBtns.some((elem) => elem.checked);
});


submitBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(gameArtistScreenElem);
  resetBtnsToDefault(audioElems, playBtns);
  form.reset();
  submitBtn.disabled = true;
});


const replayBtn = screenElem.querySelector(`.game__back`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreenElem);
});

export default screenElem;
