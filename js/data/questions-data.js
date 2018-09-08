import songs from './songs';


const questions = [
  {
    type: `genre`,
    title: `Выберите джаз треки`,
    genre: `Jazz`,
    answers: {
      'answer-1': songs[0],
      'answer-2': songs[5],
      'answer-3': songs[4],
      'answer-4': songs[0]
    }
  },
  {
    type: `artist`,
    rightAnswer: songs[0],
    answers: {
      'artist-1': songs[0],
      'artist-2': songs[5],
      'artist-3': songs[4],
    }
  },
  {
    type: `genre`,
    title: `Выберите ${songs[3].genre} треки`,
    genre: songs[3].genre,
    answers: {
      'answer-1': songs[0],
      'answer-2': songs[3],
      'answer-3': songs[1],
      'answer-4': songs[3]
    }
  },
  {
    type: `artist`,
    rightAnswer: songs[1],
    answers: {
      'artist-1': songs[5],
      'artist-2': songs[1],
      'artist-3': songs[3]
    }
  },
  {
    type: `artist`,
    rightAnswer: songs[4],
    answers: {
      'artist-1': songs[3],
      'artist-2': songs[2],
      'artist-3': songs[4],
    }
  },
  {
    type: `genre`,
    title: `Выберите ${songs[1].genre} треки`,
    genre: songs[1].genre,
    answers: {
      'answer-1': songs[0],
      'answer-2': songs[3],
      'answer-3': songs[1],
      'answer-4': songs[3]
    }
  },
  {
    type: `artist`,
    rightAnswer: songs[4],
    answers: {
      'artist-1': songs[3],
      'artist-2': songs[2],
      'artist-3': songs[4],
    }
  },
  {
    type: `genre`,
    title: `Выберите ${songs[0].genre} треки`,
    genre: songs[0].genre,
    answers: {
      'answer-1': songs[2],
      'answer-2': songs[3],
      'answer-3': songs[0],
      'answer-4': songs[3]
    }
  },
  {
    type: `result`
  },
];

export default questions;
