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

const mapElement = document.querySelector('.map__canvas');
const cardTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

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
  const cardElement = cardTemplateElement.cloneNode(true);
  for(const key in OBJECT_FIELD_MAP) {
    setValue(OBJECT_FIELD_MAP[key], offer[key]);
  }

  setValue('.popup__type', TYPES_OF_HOUSE_ON_RUSSIAN[offer.type]);
  setValue('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  setValue('.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);

  const featuresContainerElement = cardElement.querySelector('.popup__features');
  const featuresListElement = featuresContainerElement.querySelectorAll('.popup__feature');
  const offerFeatures = offer.features;

  if (offerFeatures.length > 0) {
    featuresListElement.forEach((featuresListItem) => {
      const isContains = offerFeatures.some(
        (offerFeature) => featuresListItem.classList.contains(`popup__feature--${offerFeature}`)
      );

      if (!isContains) {
        featuresListItem.remove();
      }
    });
  } else {
    featuresContainerElement.remove();
  }

  const photoContainerElement = cardElement.querySelector('.popup__photos');
  const photoItem = photoContainerElement.querySelector('.popup__photo');

  const offerPhotos = offer.photos;

  if (offerPhotos) {
    offerPhotos.forEach((photo) => {
      const clonedPhotoItem = photoItem.cloneNode(true);
      clonedPhotoItem.src = photo;
      photoContainerElement.appendChild(clonedPhotoItem);
      photoItem.remove();
    }
    );
  } else {
    photoContainerElement.remove();
  }

  setValue('.popup__avatar', author.avatar, 'src');

  mapElement.appendChild(cardElement);
};

export{renderPopup};
