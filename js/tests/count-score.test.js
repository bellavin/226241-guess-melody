import {assert} from 'chai';
import {countScore} from '../count-score';

describe(`Count score`, () => {
  describe(`Correct answers`, () => {
    it(`should return right score`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 29},
            {correct: false, time: 30},
            {correct: false, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 3
      ), 10);
      assert.strictEqual(countScore(
          [
            {correct: true, time: 29},
            {correct: false, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29}
          ], 3
      ), 14);
      assert.strictEqual(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), 6);
    });
  });

  describe(`Input errors`, () => {
    it(`Too mach incorrect answers, should return -1`, () => {
      assert.strictEqual(countScore(
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
      ), -1);
      assert.strictEqual(countScore(
          [
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), -1);
    });
    it(`too mach answers, should return -1`, () => {
      assert.strictEqual(countScore(
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
          ], 1
      ), -1);
    });
    it(`too few answers, should return -1`, () => {
      assert.strictEqual(countScore(
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
