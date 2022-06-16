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


/* author, объект — описывает автора. Содержит одно поле: */

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10
// Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются




/* offer, объект — содержит информацию об объявлении. Состоит из полей: */

// title, строка — заголовок предложения. Придумайте самостоятельно
// address, строка — адрес предложения
// Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}
// price, число — стоимость. Случайное целое положительное число.
// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel
// rooms, число — количество комнат. Случайное целое положительное число
// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner
// значения не должны повторяться
// description, строка — описание помещения. Придумайте самостоятельно

const TITLE = [];
const ADDRESS = [];
const PRICE_RANGE = [];
const ROOM_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const ROOMS_QUANTITY = [];
const GUESTS_QUANTITY = [];
const CHECKIN_TIME = [12:00, 13:00, 14:00];
const CHECKOUT_TIME = [12:00, 13:00, 14:00];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION_ROOM = [];


/* photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg. */


const PHOTOS_ADDRESS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


/* location, объект — местоположение в виде географических координат. Состоит из двух полей: */

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ROOM_LOCATION = [
  lat = parseFloat (35.65000, 35.70000);
  lng = parseFloat (139.70000, 139.80000);
];


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRoomOffer = () => {
  const randomTitleIndex = getRandomPositiveInteger(0, TITLE.length - 1);
  const randomAddressIndex = getRandomPositiveInteger(0, ADDRESS.length - 1);
  const randomPriceIndex = getRandomPositiveInteger(0, PRICE_RANGE.length - 1);
  const randomTypeIndex = getRandomPositiveInteger(0, ROOM_TYPE.length - 1);
  const randomRoomsIndex = getRandomPositiveInteger(0, ROOMS_QUANTITY.length - 1);
  const randomGuestsIndex = getRandomPositiveInteger(0, GUESTS_QUANTITY.length - 1);
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


/* author, объект — описывает автора. Содержит одно поле: */

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10
// Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются




/* offer, объект — содержит информацию об объявлении. Состоит из полей: */

// title, строка — заголовок предложения. Придумайте самостоятельно
// address, строка — адрес предложения
// Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}
// price, число — стоимость. Случайное целое положительное число.
// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel
// rooms, число — количество комнат. Случайное целое положительное число
// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner
// значения не должны повторяться
// description, строка — описание помещения. Придумайте самостоятельно

const TITLE = [];
const ADDRESS = [];
const PRICE_RANGE = [];
const ROOM_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const ROOMS_QUANTITY = [];
const GUESTS_QUANTITY = [];
const CHECKIN_TIME = [12:00, 13:00, 14:00];
const CHECKOUT_TIME = [12:00, 13:00, 14:00];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION_ROOM = [];


/* photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg. */


const PHOTOS_ADDRESS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


/* location, объект — местоположение в виде географических координат. Состоит из двух полей: */

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ROOM_LOCATION = [
  lat = parseFloat (35.65000, 35.70000);
  lng = parseFloat (139.70000, 139.80000);
];


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRoomOffer = () => {
  const randomTitleIndex = getRandomPositiveInteger(0, TITLE.length - 1);
  const randomAddressIndex = getRandomPositiveInteger(0, ADDRESS.length - 1);
  const randomPriceIndex = getRandomPositiveInteger(0, PRICE_RANGE.length - 1);
  const randomTypeIndex = getRandomPositiveInteger(0, ROOM_TYPE.length - 1);
  const randomRoomsIndex = getRandomPositiveInteger(0, ROOMS_QUANTITY.length - 1);
  const randomGuestsIndex = getRandomPositiveInteger(0, GUESTS_QUANTITY.length - 1);
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


/* author, объект — описывает автора. Содержит одно поле: */

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10
// Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются




/* offer, объект — содержит информацию об объявлении. Состоит из полей: */

// title, строка — заголовок предложения. Придумайте самостоятельно
// address, строка — адрес предложения
// Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}
// price, число — стоимость. Случайное целое положительное число.
// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel
// rooms, число — количество комнат. Случайное целое положительное число
// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner
// значения не должны повторяться
// description, строка — описание помещения. Придумайте самостоятельно

const TITLE = [
  'Добро пожаловать в наш шикарный дворец!',
  'Лучшее соотношение цены и качества',
  'Отличный выбор для отдыха с детьми',
  'Выбор наших постояльцев!',
];


const ADDRESS = [];
const PRICE_RANGE = [];
const ROOM_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const ROOMS_QUANTITY = [];
const GUESTS_QUANTITY = [];
const CHECKIN_TIME = [12:00, 13:00, 14:00];
const CHECKOUT_TIME = [12:00, 13:00, 14:00];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ROOM_DESCRIPTION = [
  'Вы сможете прекрасно отдохнуть в номерах с ТВ с плоским экраном, кондиционером и мини-баром',
  'Вам будет доступна круглосуточная стойка регистрации, услуги консьержа и террасу на крыше',
  'Мы предлагаем обслуживание в номер, услуги консьержа и террасу на крыше',
  'Номера оборудованы ТВ с плоским экраном, кондиционером и мини-баром и где можно постоянно быть на связи благодаря бесплатному Интернету',
  'Во время пребывания здесь воспользуйтесь такими услугами, как обслуживание номеров и услуги консьержа. К услугам гостей также бассейн и завтрак. Путешественники, приехавшие на машине, могут воспользоваться бесплатной парковкой.'
];


/* photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg. */


const PHOTOS_ADDRESS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


/* location, объект — местоположение в виде географических координат. Состоит из двух полей: */

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ROOM_LOCATION = [
  lat = parseFloat (35.65000, 35.70000);
  lng = parseFloat (139.70000, 139.80000);
];

const SIMILAR_ROOM_OFFER = 10;


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createRoomOffer = () => {
  return {
    title: getRandomArrayElement(TITLE),
    address: getRandomArrayElement(ADDRESS),
    price: getRandomArrayElement(PRICE_RANGE),
    type: getRandomArrayElement(ROOM_TYPE),
    rooms: getRandomArrayElement(ROOM_TYPE) + ' ' + getRandomArrayElement(GUESTS_QUANTITY),
    checkin: getRandomArrayElement(CHECKIN_TIME),
    checkout: getRandomArrayElement(CHECKOUT_TIME),
    features: getRandomArrayElement(FEATURES_LIST),
    descriptions: getRandomArrayElement(ROOM_DESCRIPTION),
  };
};

const similarRoomOffer = Array.from({length: SIMILAR_ROOM_OFFER}, createRoomOffer);
