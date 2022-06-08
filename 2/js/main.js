// Получение случайного целого числа в заданном интервале, включительно
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
