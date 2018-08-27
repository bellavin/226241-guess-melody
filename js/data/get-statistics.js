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

  if (total === 1) {
    return `Вы заняли лучшее место среди всех игроков. Наши поздравления, Вы настоящий меломан`;
  }

  if (total === 1 + otherResults.length) {
    return `Вы прошли игру, но ваш результат пока последний, дерзайте и у Вас все получится`;
  }

  const numOfPlayers = otherResults.length + 1;
  const statistic = Math.round((1 - total / numOfPlayers) * 100);
  return `Вы заняли ${total} место из ${numOfPlayers} игроков. Это лучше, чем у ${statistic}% игроков`;
};
