import {changeStateAdForm} from './form.js';
import {createCard} from './template.js';

const ZOOM_DEFAULT = 10;
const DECIMAL_PLACES = 5;

const addressFieldElement = document.querySelector('[name="address"]');
const coordsDefault = {
  lat: 35.68949,
  lng: 139.69171
};
const map = L.map('map-canvas');
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});
const mainPinMarker = L.marker(
  coordsDefault,
  {
    draggable: true,
    icon: mainPinIcon
  }
);
const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const markerGroup = L.layerGroup().addTo(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const setAddress = (lat, lng) => {
  addressFieldElement.value = `${lat}, ${lng}`;
};

mainPinMarker.addTo(map);
mainPinMarker.on('move', (evt) => {
  const coords = evt.target.getLatLng();
  setAddress(coords.lat.toFixed(DECIMAL_PLACES), coords.lng.toFixed(DECIMAL_PLACES));
});

const createMap = () => {
  map
    .on('load', () => {
      changeStateAdForm(true);
    })
    .setView(coordsDefault, ZOOM_DEFAULT);
};

const createMarker = (item) => {
  const {lat, lng} = item.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    }
  );
  marker
    .addTo(markerGroup)
    .bindPopup(() => createCard(item));
};

const renderOnMap = (items) => {
  markerGroup.clearLayers();
  items.forEach((item) => {
    createMarker(item);
  });
};

const setMapOriginalState = () => {
  mainPinMarker.setLatLng(coordsDefault);
  map.closePopup();
};

export {
  createMap,
  renderOnMap,
  setMapOriginalState
};
