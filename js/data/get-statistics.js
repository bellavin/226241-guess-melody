export const getStatistics = (otherResults, playerResult) => {
  if (playerResult.time <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerResult.lives <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  let total = 1;
  for (let result of otherResults) {
    if (result > playerResult.score) {
      total++;
    }
  }
  const statistic = Math.round((1 - total / otherResults.length) * 100);
  return `Вы заняли ${total} место из ${otherResults.length} игроков. Это лучше, чем у ${statistic}% игроков`;
};
