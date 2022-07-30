const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger(1, 10);

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};
getRandomPositiveFloat(1.3, 4.9, 3);


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


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


const SUCCESS_MESSAGE_TIME_DISPLAY = 3000;
const POPUP_BUTTON_TEXT = 'Закрыть окно';

const body = document.querySelector('body');
const successPopupTemplate = document.querySelector('#success').content;
const errorPopupTemplate = document.querySelector('#error').content;

let popupContainer = null;
let popupMessage = null;
let popupButton = null;

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isClick = (evt) => evt.type === 'click';

const onDocumentPopup = (evt) => {
  if (isEscapeKey(evt)) {
    unBindDocumentEvents();
    hidePopup();
  } else if (isClick(evt)) {
    unBindDocumentEvents();
    hidePopup();
  }
};

function bindDocumentEvents () {
  document.addEventListener('click', onDocumentPopup);
  document.addEventListener('keydown', onDocumentPopup);
}

function unBindDocumentEvents() {
  document.removeEventListener('click', onDocumentPopup);
  document.removeEventListener('keydown', onDocumentPopup);
}

function showPopup (element) {
  body.appendChild(element);
  bindDocumentEvents();
}

function hidePopup () {
  body.removeChild(popupContainer);
}

const showSuccess = () => {
  popupContainer = successPopupTemplate.cloneNode(true).querySelector('.success');
  setTimeout(() => {
    hidePopup();
  }, SUCCESS_MESSAGE_TIME_DISPLAY);

  showPopup(popupContainer);
};

const showError = (message) => {
  popupContainer = errorPopupTemplate.cloneNode(true).querySelector('.error');
  popupMessage = popupContainer.querySelector('.error__message');
  popupButton = popupContainer.querySelector('.error__button');

  popupMessage.textContent = message;
  popupButton.textContent = POPUP_BUTTON_TEXT;

  showPopup(popupContainer);
};


export {showError, showSuccess, getRandomArrayElement, getRandomPositiveInteger, getRandomPositiveFloat, getRandomFeatures, makeGenerator, getAvatar};
