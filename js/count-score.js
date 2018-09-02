import {initialState, Point, FAST_ANSWER_MAX_TIME, ANSWERS_NUM} from './consts';

export const countScore = (answers) => {
  if (answers.length !== ANSWERS_NUM) {
    return -1;
  }
  if (answers.filter((answer) => answer.correct).length <= answers.length - initialState.lives) {
    return -1;
  }

  let score = 0;
  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time >= FAST_ANSWER_MAX_TIME) {
        score += Point.ANSWER;
      }
      if (answer.time < FAST_ANSWER_MAX_TIME) {
        score += Point.FAST_ANSWER;
      }
    }
    if (!answer.correct) {
      score += Point.WRONG_ANSWER;
    }
  });
  return score;
};
