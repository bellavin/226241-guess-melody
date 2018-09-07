import {updateScreen, getElemFromTmp, arraysEqual, canContinue} from './util.js';

import welcomeScreenElem from './screens/welcome.js';
import {gameArtistTmp, playSongArtistListener} from './screens/game-artist';
import {gameGenreTmp, formChahgeListener, playSongGenreListener} from './screens/game-genre';
import {headerTmp, replayBtnListener} from './screens/game-header';

import {resultTmp, replay} from './screens/result-tmps';

import questions from './data/questions-data';
import {initialState} from './consts';




const renderResultScreen = (tmp) => {
  const resultElem = getElemFromTmp(tmp);
  updateScreen(resultElem);
  const replayBtn = resultElem.querySelector(`.result__replay`);
  replay(replayBtn);
};

let game;

const startGame = () => {
  game = Object.assign({}, initialState);

  let quetionIndex = 0;

  const continueGame = (expression) => {
    if (expression) {
      quetionIndex++;
      updateGame(game, questions[quetionIndex].type);
    } else {
      if (canContinue(game)) {
        quetionIndex++;
        game.lives -= 1;
        updateGame(game, questions[quetionIndex].type);
      } else {
        renderResultScreen(resultTmp.failTries);
        game = Object.assign({}, initialState);
        quetionIndex = 0;
      }
    }
  };

  const updateGame = (state, type) => {
    let screenElem;


    if (type === `artist`) {
      const songs = Object.values(questions[quetionIndex].answers);
      screenElem = getElemFromTmp(gameArtistTmp(songs, questions[quetionIndex].rightAnswer));

      const form = screenElem.querySelector(`form`);
      const playBtn = screenElem.querySelector(`.track__button`);
      const audioElem = screenElem.querySelector(`audio`);
      playSongArtistListener(playBtn, audioElem);

      form.addEventListener(`change`, (evt) => {
        evt.preventDefault();
        continueGame(questions[quetionIndex].rightAnswer === questions[quetionIndex].answers[evt.target.value]);
        form.reset();
      });
    }


    if (type === `genre`) {
      const songs = Object.values(questions[quetionIndex].answers);
      screenElem = getElemFromTmp(gameGenreTmp(songs, questions[quetionIndex].title));

      const form = screenElem.querySelector(`.game__tracks`);
      const checkBtns = Array.from(form.answer);
      const sbmBtn = form.querySelector(`.game__submit`);
      formChahgeListener(form, sbmBtn, checkBtns);
      playSongGenreListener(form);

      form.addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        sbmBtn.disabled = true;
        const rightAnswers = songs.filter((song) => song.genre === questions[quetionIndex].genre);
        const userAnswers = checkBtns
          .filter((btn) => btn.checked)
          .map((answer) => questions[quetionIndex].answers[answer.value]);
        continueGame(arraysEqual(rightAnswers, userAnswers));
        form.reset();
      });
    }


    if (screenElem) {
      const header = getElemFromTmp(headerTmp(game));
      screenElem.insertBefore(header, screenElem.firstChild);
      const replayBtn = screenElem.querySelector(`.game__back`);
      replayBtnListener(replayBtn);
      updateScreen(screenElem);
    }


    if (type === `result`) {
      renderResultScreen(resultTmp.success);
      game = Object.assign({}, initialState);
      quetionIndex = 0;
    }
  };


  updateScreen(welcomeScreenElem);

  const playBtn = welcomeScreenElem.querySelector(`.welcome__button`);
  playBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    updateGame(game, questions[quetionIndex].type);
  });
};

startGame();

export default startGame;

