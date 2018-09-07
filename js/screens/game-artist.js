const gameArtistTmp = (songs, answer) => `<section class="game game--artist">
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio>
        <source src="${answer.src}" type="audio/mpeg">
      </audio>
    </div>

    <form class="game__artist">
    ${songs.map((song, index) => `
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index + 1}" id="answer-${index + 1}">
        <label class="artist__name" for="answer-${index + 1}">
          <img class="artist__picture" src="${song.image}" alt="Пелагея">
          ${song.artist}
        </label>
      </div>`).join(``)}
    </form>
  </section>
</section>`;

const playSongArtistListener = (playBtn, audioElem) => {
  playBtn.addEventListener(`click`, () => {
    if (playBtn.classList.contains(`track__button--play`)) {
      audioElem.play();
      playBtn.className = `track__button track__button--pause`;
    } else if (playBtn.classList.contains(`track__button--pause`)) {
      audioElem.pause();
      playBtn.className = `track__button track__button--play`;
    }
  });
};

export {gameArtistTmp, playSongArtistListener};
