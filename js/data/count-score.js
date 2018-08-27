export const countScore = (answers, lives) => {
  if (answers.length !== 10) {
    return -1;
  }
  if (lives <= 0) {
    return -1;
  }

  let score = 0;
  for (let answer of answers) {
    if (answer.correct && answer.time <= 30) {
      score += 2;
    }
    if (answer.correct && answer.time > 30) {
      score++;
    }
    if (!answer.correct && score > 2) {
      score -= 2;
    }
    if (!answer.correct && score <= 2) {
      score = 0;
    }
  }
  return score;
};
