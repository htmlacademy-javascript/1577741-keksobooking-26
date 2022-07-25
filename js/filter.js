import {renderOnMap} from './map.js';
import {prepareData} from './api.js';

const ANY_VALUE = 'any';
const ITEMS_PER_PORTION = 10;
const prices = {
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: Number.MAX_VALUE,
  }
};

const mapFilters = document.querySelector('.map__filters');
const typeElement = mapFilters.querySelector('#housing-type');
const priceElement = mapFilters.querySelector('#housing-price');
const roomsElement = mapFilters.querySelector('#housing-rooms');
const guestsElement = mapFilters.querySelector('#housing-guests');
const featureElements = Array.from(mapFilters.querySelectorAll('.map__checkbox'));

const filterFeatures = (offer) => {
  return featureElements.every((element) => {
    if (element.checked) {
      return offer.offer.features && offer.offer.features.some((value) => value === element.value);
    }
    return true;
  });
};

const filterHousingType = (offer) => {
  return typeElement.value === ANY_VALUE || offer.offer.type === typeElement.value;
};

const filterPrice = (offer) => {
  return priceElement.value === ANY_VALUE || offer.offer.price <= prices[priceElement.value].max && offer.offer.price >= prices[priceElement.value].min;
};

const filterRooms = (offer) => {
  return roomsElement.value === ANY_VALUE || offer.offer.rooms === Number(roomsElement.value);
};

const filterGuests = (offer) => {
  return guestsElement.value === ANY_VALUE || offer.offer.guests === Number(guestsElement.value);
};

const getFilterOffers = (offers) => {
  const filteredOffers = [];
  for (const offer of offers) {
    if (filterGuests(offer) && filterRooms(offer) && filterFeatures(offer) && filterHousingType(offer) && filterPrice(offer)) {
      filteredOffers.push(offer);
    }

    if (filteredOffers.length >= ITEMS_PER_PORTION) {
      break;
    }
  }

  return filteredOffers;
};

const initMapFilters = (offers) => {
  mapFilters.addEventListener('change', () => {
    const filteredOffers = getFilterOffers(offers);
    renderOnMap(filteredOffers);
  });
};

export { initMapFilters };
