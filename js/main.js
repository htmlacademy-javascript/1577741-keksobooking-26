import {makeOffers} from './data.js';
import {getRandomArrayElement} from './utils.js';
import {getRandomPositiveInteger} from './utils.js';
import {getRandomPositiveFloat} from './utils.js';
import {getRandomFeatures} from './utils.js';


const makeGenerator = (count) => {
  const pull = Array.from({length: count}, (_, index) => index);
  return () =>
    pull.splice(getRandomPositiveInteger(0, pull.length - 1), 1).shift();
};

const getAvatar = makeGenerator(10);

