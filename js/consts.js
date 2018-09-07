const initialState = {
  lives: 3,
  time: 5
};

const Point = {
  ANSWER: 1,
  FAST_ANSWER: 2,
  WRONG_ANSWER: -2,
};

const FAST_ANSWER_MAX_TIME = 30;

const ANSWERS_NUM = 10;

export {initialState, Point, FAST_ANSWER_MAX_TIME, ANSWERS_NUM};
