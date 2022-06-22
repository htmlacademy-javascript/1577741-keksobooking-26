import {getRandomArrayElement} from './utils.js';
import {getRandomPositiveInteger} from './utils.js';
import {getRandomPositiveFloat} from './utils.js';
import {getRandomFeatures} from './main.js';
import {makeGenerator} from './main.js';
import {getAvatar} from './main.js';
import {getRandomFeatures} from './utils.js';

const offerTitle = [
  'Добро пожаловать в наш шикарный дворец!',
  'Лучшее соотношение цены и качества',
  'Отличный выбор для отдыха с детьми',
  'Выбор наших постояльцев!',
];

const ROOMS_OFFER_MAX_PRICE = 10000;
const ROOMS_OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS_MAX_QUANTITY = 100;
const GUESTS_MAX_QUANTITY = 100;
const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const roomDescription = [
  'Номера с ТВ с плоским экраном, кондиционером и мини-баром',
  'Круглосуточная стойка регистрации, услуги консьержа и терраса на крыше',
  'Мы предлагаем обслуживание в номер, услуги консьержа и террасу на крыше',
  'Шикарный дворец с видом на море',
  'Прекрасные номера для семей с детьми'
];

const ROOM_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const LOCATION_OFFERS = 10;

const ROOMS_OFFERS = 10;

const makeOffer = () => {
  const location = {
    lat: getRandomPositiveFloat(MIN_LAT, MAX_LAT, LOCATION_OFFERS),
    lng: getRandomPositiveFloat(MIN_LNG, MAX_LNG, LOCATION_OFFERS),
  };

  return {

    author: {
      avatar: `img/avatars/user${String(getAvatar()).padStart(2, 0)}.png`,
    },
    offer: {
      title: getRandomArrayElement(offerTitle),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(0, ROOMS_OFFER_MAX_PRICE),
      type: getRandomArrayElement(ROOMS_OFFER_TYPE),
      rooms: getRandomPositiveInteger(0, ROOMS_MAX_QUANTITY),
      guests: getRandomPositiveInteger(0, GUESTS_MAX_QUANTITY),
      checkin: getRandomArrayElement(CHECKIN_TIME),
      checkout: getRandomArrayElement(CHECKOUT_TIME),
      features: getRandomFeatures(3, FEATURES_LIST),
      description: getRandomArrayElement(roomDescription),
      photos: ROOM_PHOTOS.slice(0, getRandomPositiveInteger(0, ROOM_PHOTOS.length - 1)),
    },
    location: location
  };
};

const makeOffers = () => Array.from({length: ROOMS_OFFERS}, makeOffer);

makeOffers();

export {makeOffers};
