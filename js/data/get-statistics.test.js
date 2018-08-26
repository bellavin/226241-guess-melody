import {assert} from 'chai';
import {getStatistics} from './get-statistics';


describe(`Player statistic`, () => {
  it(`should return player statistic`, () => {
    assert.equal(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 12,
          time: 40
        }
    ), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });
  it(`should return player statistic`, () => {
    assert.equal(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 5,
          time: 40
        }
    ), `Вы заняли 4 место из 5 игроков. Это лучше, чем у 20% игроков`);
  });
  it(`should return fail`, () => {
    assert.equal(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 5,
          time: 0
        }
    ), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return fail`, () => {
    assert.equal(getStatistics(
        [4, 5, 8, 10, 11],
        {
          score: 5,
          time: 1,
          lives: 0
        }
    ), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
