const gameGenreTmp = (songs, title) => `<section class="game game--genre">
  <section class="game__screen">
    <h2 class="game__title">${title}</h2>
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
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${answerNum + 1}" id="answer-${answerNum + 1}">
          <label class="game__check" for="answer-${answerNum + 1}">Отметить</label>
        </div>
      </div>`).join(``)}
      <button class="game__submit button" type="submit" disabled>Ответить</button>
    </form>
  </section>
</section>`;

const formChahgeListener = (form, sbmBtn, checkBtns) => {
  form.addEventListener(`change`, (evt) => {
    evt.preventDefault();
    sbmBtn.disabled = !checkBtns.some((elem) => elem.checked);
  });
};

const resetBtnsToDefault = (audios, btns) => {
  audios.forEach((elem) => {
    elem.pause();
  });
  btns.forEach((btn) => {
    btn.className = `track__button track__button--play`;
  });
};

const playSongGenreListener = (form) => {
  const playBtns = form.querySelectorAll(`.track__button`);
  const audioElems = form.querySelectorAll(`audio`);

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
};

export {gameGenreTmp, formChahgeListener, playSongGenreListener};
