import {makeOffers} from './data.js';
import {getRandomArrayElement} from './utils.js';
import {getRandomPositiveInteger} from './utils.js';
import {getRandomPositiveFloat} from './utils.js';


const getRandomFeatures = (count, array) => {
  const newFeatures = [];
  if (count >= array.length) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    let newElement = array[Math.floor(Math.random() * array.length)];
    while (newFeatures.includes(newElement)) {
      newElement = array[Math.floor(Math.random() * array.length)];
    }
    newFeatures.push(newElement);
  }
  return newFeatures;
};


const makeGenerator = (count) => {
  const pull = Array.from({length: count}, (_, index) => index);
  return () =>
    pull.splice(getRandomPositiveInteger(0, pull.length - 1), 1).shift();
};

const getAvatar = makeGenerator(10);

export {getRandomFeatures, makeGenerator, getAvatar};

