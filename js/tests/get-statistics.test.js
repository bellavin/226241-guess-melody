import {assert} from 'chai';
import {getStatistics} from '../get-statistics';


describe(`Player statistic`, () => {
  it(`should return first place`, () => {
    assert.strictEqual(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 12,
          time: 40
        }
    ), `Вы заняли лучшее место среди всех игроков. Наши поздравления, Вы настоящий меломан`);
  });
  it(`should return last place`, () => {
    assert.strictEqual(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 2,
          time: 40
        }
    ), `Вы прошли игру, но ваш результат пока последний, дерзайте и у Вас все получится`);
  });
  it(`should return player statistic`, () => {
    assert.strictEqual(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 9,
          time: 40
        }
    ), `Вы заняли 3 место из 6 игроков. Это лучше, чем у 50% игроков`);
    assert.strictEqual(getStatistics(
        [10, 3, 8, 10, 11],
        {
          score: 7,
          time: 40
        }
    ), `Вы заняли 5 место из 6 игроков. Это лучше, чем у 17% игроков`);
  });
  it(`should return time is over`, () => {
    assert.strictEqual(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 5,
          time: 0
        }
    ), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return fail`, () => {
    assert.strictEqual(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 5,
          time: 1,
          lives: 0
        }
    ), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
