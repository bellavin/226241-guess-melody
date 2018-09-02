const tmp = (time, score, fails, place) => `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${time} вы набрали ${score}, совершив ${fails}</p>
  <p class="result__text">${place}</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`;

export default tmp;
