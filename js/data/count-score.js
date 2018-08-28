export const countScore = (answers, lives) => {
  const Points = {
    ANSWER: 1,
    FAST_ANSWER: 2,
    WRONG_ANSWER: -2,
  };

  if (answers.length !== 10) {
    return -1;
  }
  if (lives > 3 || lives < 1) {
    return -1;
  }
  if (answers.filter((answer) => !answer.correct).length > 2) {
    return -1;
  }

  let score = 0;
  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time >= 30) {
        score += Points.ANSWER;
      }
      if (answer.time < 30) {
        score += Points.FAST_ANSWER;
      }
    }
    if (!answer.correct) {
      score += Points.WRONG_ANSWER;
    }
  });
  return score;
};
