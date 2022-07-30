import {showSuccess, showError} from './utils.js';
import {resetMapFilterForm} from './form.js';
import {setMapOriginalState} from './map.js';
import {sendData} from './api.js';

const adFormElement = document.querySelector('.ad-form');
const priceElement = adFormElement.querySelector('[name="price"]');
const typeElement = adFormElement.querySelector('[name="type"]');
const roomNumberElement = adFormElement.querySelector('[name="rooms"]');
const capacityElement = adFormElement.querySelector('[name="capacity"]');
const timeinElement = adFormElement.querySelector('[name="timein"]');
const timeoutElement = adFormElement.querySelector('[name="timeout"]');
const adFormSlider = adFormElement.querySelector('.ad-form__slider');
const adFormSubmitButton = adFormElement.querySelector('.ad-form__submit');

const MAX_OFFER_PRICE = 100000;
const NOT_ROOM_VALUE = 100;
const NOT_FOR_GUESTS = 100;
const SLIDER_STEP = 10;

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const objectTypes = {
  bungalow: 'бунгало',
  flat: 'квартиры',
  hotel: 'отеля',
  house: 'дома',
  palace: 'дворца'
};

const maxCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};


const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});


const onPristineValidate = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const updatePriceInput = (houseType) => {
  priceElement.placeholder = minPrices[houseType];
  priceElement.min = minPrices[houseType];
  priceElement.max = '100000';
};

const onTypeFieldSelectChange = (evt) => {
  evt.preventDefault();
  updatePriceInput(evt.target.value);
};

const onTimeFieldsSynchronize = (evt) => {
  evt.preventDefault();
  if (evt.target.name === 'timein') {
    timeoutElement.value = evt.target.value;
  } else {
    timeinElement.value = evt.target.value;
  }
};

const validatePriceField = () => {
  const validate = (value) => value <= MAX_OFFER_PRICE && value >= minPrices[typeElement.value];
  const priceFieldErrorMessage = () => (priceElement.value > MAX_OFFER_PRICE)
    ? `Стоимость ${objectTypes[typeElement.value]} не более ${MAX_OFFER_PRICE} руб.`
    : `Стоимость ${objectTypes[typeElement.value]} не менее ${minPrices[typeElement.value]}`;
  pristine.addValidator(priceElement, validate, priceFieldErrorMessage);
};


const validateRoomNumberField = () => {
  const validate = (value) => maxCapacity[value].includes(+capacityElement.value);
  const roomNumberErrorMessage = () => (+roomNumberElement.value === NOT_ROOM_VALUE)
    ? 'Не для гостей' : 'Слишком много гостей';
  pristine.addValidator(roomNumberElement, validate, roomNumberErrorMessage);
};


const validateCapacityField = () => {
  const validate = (value) => maxCapacity[roomNumberElement.value].includes(+value);
  const capacityFieldErrorMessage = () => (+capacityElement.value === NOT_FOR_GUESTS)
    ? 'Нельзя размещать гостей'
    : 'Слишком мало комнат';
  pristine.addValidator(capacityElement, validate, capacityFieldErrorMessage);
};

const createPriceSlider = () => {
  noUiSlider.create(adFormSlider, {
    range: {
      min: Number(priceElement.min),
      max: Number(priceElement.max)
    },
    start: Number(priceElement.min),
    step: SLIDER_STEP,
    connect: 'lower',
    format: {
      to: (value) => parseFloat(value).toFixed(0),
      from: (value) => parseFloat(value).toFixed(0)
    }
  });

  adFormSlider.noUiSlider.on('update', () => {
    priceElement.value = adFormSlider.noUiSlider.get();
  });

  priceElement.addEventListener('change', (evt) => {
    evt.preventDefault();
    adFormSlider.noUiSlider.set(evt.target.value);
  });
};


const addValidateForm = () => {
  updatePriceInput(typeElement.value);
  validatePriceField();
  validateRoomNumberField();
  validateCapacityField();
  createPriceSlider();

  roomNumberElement.addEventListener('change', onPristineValidate);
  capacityElement.addEventListener('change', onPristineValidate);

  typeElement.addEventListener('change', onTypeFieldSelectChange);
  timeinElement.addEventListener('change', onTimeFieldsSynchronize);
  timeoutElement.addEventListener('change', onTimeFieldsSynchronize);

  adFormElement.addEventListener('submit', onPristineValidate);

};

const formSendedSuccess = () => {
  adFormSubmitButton.disabled = false;
  setMapOriginalState();
  resetMapFilterForm();
  showSuccess();
};

const onSubmitForm = (evt) => {
  evt.preventDefault();
  const isValidated = pristine.validate();
  if (isValidated) {
    const formData = new FormData(evt.target);
    adFormSubmitButton.disabled = true;
    sendData(formSendedSuccess, showError, formData);
  }
};

const onResetForm = () => {
  adFormElement.reset();
  adFormSlider.noUiSlider.reset();
  pristine.reset();
  resetMapFilterForm();
  setMapOriginalState();
};

const initUserForm = () => {
  priceElement.setAttribute('placeholder', minPrices[typeElement.value]);
  addValidateForm();

  adFormElement.addEventListener('submit', onSubmitForm);
  adFormElement.addEventListener('reset', onResetForm);
};

export {addValidateForm, initUserForm};
