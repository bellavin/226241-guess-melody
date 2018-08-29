export const countScore = (answers, lives) => {
  const Points = {
    ANSWER: 1,
    FAST_ANSWER: 2,
    WRONG_ANSWER: -2,
  };
  const LivesNum = {
    MIN: 1,
    MAX: 3
  };
  const Answers = {
    NUM: 10,
    INCORRECT: 2
  };
  const GOOD_TIME = 30;


  if (answers.length !== Answers.NUM) {
    return -1;
  }
  if (lives > LivesNum.MAX || lives < LivesNum.MIN) {
    return -1;
  }
  if (answers.filter((answer) => !answer.correct).length > Answers.INCORRECT) {
    return -1;
  }


  let score = 0;
  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time >= GOOD_TIME) {
        score += Points.ANSWER;
      }
      if (answer.time < GOOD_TIME) {
        score += Points.FAST_ANSWER;
      }
    }
    if (!answer.correct) {
      score += Points.WRONG_ANSWER;
    }
  });
  return score;
};
