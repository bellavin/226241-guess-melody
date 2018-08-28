export const getStatistics = (otherRests, playerRes) => {
  if (playerRes.time <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (playerRes.lives <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const place = otherRests.filter((res) => res > playerRes.score).length + 1;
  if (place === 1) {
    return `Вы заняли лучшее место среди всех игроков. Наши поздравления, Вы настоящий меломан`;
  }
  if (place === 1 + otherRests.length) {
    return `Вы прошли игру, но ваш результат пока последний, дерзайте и у Вас все получится`;
  }

  const playersNum = otherRests.length + 1;
  const stat = Math.round((1 - place / playersNum) * 100);
  return `Вы заняли ${place} место из ${playersNum} игроков. Это лучше, чем у ${stat}% игроков`;
};
