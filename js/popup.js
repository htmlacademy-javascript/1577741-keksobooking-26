const map = document.querySelector('.map__canvas');

const addTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const TYPES_OF_HOUSE_ON_RUSSIAN = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const OBJECT_FIELD_MAP = {
  title: '.popup__title',
  address: '.popup__text--address',
  price: '.js-popup__text--price',
  description: '.popup__description',
};

const setValue = (selector, value, attribute = 'textContent') => {
  const element = document.querySelector(selector);
  if (element) {
    if (value) {
      element[attribute] = value;
    } else {
      element.remove();
    }
  }
};


const renderPopup = ({author, offer}) => {
  const addElement = addTemplate.cloneNode(true);
  for(const key in OBJECT_FIELD_MAP) {
    setValue(OBJECT_FIELD_MAP[key], offer[key]);
  }

  setValue('.popup__type', TYPES_OF_HOUSE_ON_RUSSIAN[offer.type]);
  setValue('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  setValue('.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);

  const featuresContainer = addElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  const offerFeatures = offer.features;

  if (offerFeatures.length > 0) {
    featuresList.forEach((featuresListItem) => {
      const isContains = offerFeatures.some(
        (offerFeature) => featuresListItem.classList.contains(`popup__feature--${offerFeature}`)
      );

      if (!isContains) {
        featuresListItem.remove();
      }
    });
  } else {
    featuresContainer.remove();
  }

  const photoContainer = addElement.querySelector('.popup__photos');
  const photoItem = photoContainer.querySelector('.popup__photo');

  const offerPhotos = offer.photos;

  if (offerPhotos.length > 0) {
    offerPhotos.forEach((photo) => {
      const clonedPhotoItem = photoItem.cloneNode(true);
      clonedPhotoItem.src = photo;
      photoContainer.appendChild(clonedPhotoItem);
      photoItem.remove();
    }
    );
  } else {
    photoContainer.remove();
  }

  setValue('.popup__avatar', author.avatar, 'src');

  map.appendChild(addElement);
};

export{renderPopup};
