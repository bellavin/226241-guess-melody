import {updateScreen, getElemFromTmp} from '../util';
import dataSongs from '../data/songs';
import resultScreenElem from './result';
import gameHeaderTmp from './game-header-tmp';
import welcomeScreenElem from './welcome';


const tmp = (songs) => `<section class="game game--genre">
  ${gameHeaderTmp}
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio>
        <source src="${songs[0].src}" type="audio/mpeg">
      </audio>
    </div>

    <form class="game__artist">
    ${songs.map((song, answerNum) => `
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${answerNum + 1}" id="answer-${answerNum + 1}">
        <label class="artist__name" for="answer-3">
          <img class="artist__picture" src="${song.image}" alt="Пелагея">
          ${song.artist}
        </label>
      </div>`).join(``)}
    </form>
  </section>
</section>`;

const screenElem = getElemFromTmp(tmp(dataSongs.slice(2, 5)));


const form = screenElem.querySelector(`.game__artist`);
form.addEventListener(`change`, (evt) => {
  evt.preventDefault();
  updateScreen(resultScreenElem);
  form.reset();
});

const playBtn = screenElem.querySelector(`.track__button`);
const audioElem = screenElem.querySelector(`audio`);
playBtn.addEventListener(`click`, () => {
  if (playBtn.classList.contains(`track__button--play`)) {
    audioElem.play();
    playBtn.className = `track__button track__button--pause`;
  } else if (playBtn.classList.contains(`track__button--pause`)) {
    audioElem.pause();
    playBtn.className = `track__button track__button--play`;
  }
});

const replayBtn = screenElem.querySelector(`.game__back`);
replayBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  updateScreen(welcomeScreenElem);
});

export default screenElem;
