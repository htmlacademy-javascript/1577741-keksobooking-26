const offerTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const cardTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const getOfferType = (type) => offerTypes[type];

const createCard = (data) => {
  const cardElement = cardTemplateElement.cloneNode(true);

  const author = data.author;
  const offer = data.offer;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getOfferType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const featureElements = cardElement.querySelector('.popup__features');
  const descriptionElement = cardElement.querySelector('.popup__description');
  const photosElement = cardElement.querySelector('.popup__photos');
  const avatarElement = cardElement.querySelector('.popup__avatar');


  if (!offer.features) {
    featureElements.remove();
  } else {
    featureElements.innerHTML = '';
    featureElements.append(...offer.features.map((feature) => {
      const element = document.createElement('li');
      element.classList = `popup__feature popup__feature--${feature}`;
      return element;
    }));
  }

  if (!offer.description) {
    descriptionElement.remove();
  } else {
    descriptionElement.textContent = offer.description;
  }

  if (!offer.photos) {
    photosElement.remove();
  } else {
    const photosFragment = document.createDocumentFragment();
    const photoTemplate = photosElement.querySelector('.popup__photo');

    offer.photos.forEach((src) => {
      const photo = photoTemplate.cloneNode(true);
      photo.src = src;
      photosFragment.appendChild(photo);
    });

    photosElement.innerHTML = '';
    photosElement.appendChild(photosFragment);
  }

  avatarElement.src = author.avatar;

  return cardElement;
};

export {createCard};
