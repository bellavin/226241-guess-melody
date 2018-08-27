import {assert} from 'chai';
import {countScore} from './count-score';

describe(`Game`, () => {
  describe(`Count score`, () => {
    it(`should return 0`, () => {
      assert.equal(countScore(
          [
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), 0);
    });
    it(`should return 3`, () => {
      assert.equal(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 2
      ), 3);
    });
    it(`should return -1`, () => {
      assert.equal(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 0
      ), -1);
      assert.equal(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 1
      ), -1);
    });
  });
});
