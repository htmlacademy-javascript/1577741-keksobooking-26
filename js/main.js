import {showError} from './utils.js';
import {changeStateAdForm, changeStateMapFilterForm} from './form.js';
import {initUserForm} from './user-form.js';
import {createMap, renderOnMap} from './map.js';
import {getData, prepareData} from './api.js';
import {initMapFilters} from './filters.js';

initUserForm();
changeStateAdForm(false);
changeStateMapFilterForm(false);
getData((offers) => {
  createMap();
  renderOnMap(prepareData(offers));
  changeStateAdForm(true);
  changeStateMapFilterForm(true);
  initMapFilters(offers);
}, showError);
