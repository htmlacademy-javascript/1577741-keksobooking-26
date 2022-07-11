import{makeOffers} from './data.js';
import{renderPopup} from './popup.js';
const offers = makeOffers();
renderPopup(offers[1]);
