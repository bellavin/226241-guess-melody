export const countScore = (answers, lives) => {
  let score = 0;
  if (lives > 0) {
    if (answers.length < 10) {
      score = -1;
    } else {
      for (let answer of answers) {
        if (answer.correct) {
          if (answer.time <= 30) {
            score += 2;
          } else {
            score++;
          }
        } else if (score <= 2) {
          score = 0;
        } else {
          score -= 2;
        }
      }
    }
    return score;
  }
  return -1;
};
