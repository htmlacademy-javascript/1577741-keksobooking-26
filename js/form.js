const adFormElement = document.querySelector('.ad-form');
const adFormFieldsetElements = adFormElement.querySelectorAll('fieldset');
const mapFiltersElement = document.querySelector('.map__filters');
const mapFiltersChildrenElements = mapFiltersElement.children;

const changeStateAdForm = (isActiveState) => {
  if (isActiveState) {
    adFormElement.classList.remove('ad-form--disabled');
    adFormFieldsetElements.forEach((fieldset) => {
      fieldset.disabled = false;
    });
  } else {
    adFormElement.classList.add('ad-form--disabled');
    adFormFieldsetElements.forEach((fieldset) => {
      fieldset.disabled = true;
    });

    mapFiltersElement.classList.add('ad-form--disabled');
    for (const child of mapFiltersChildrenElements) {
      child.disabled = true;
    }
  }
};

const changeStateMapFilterForm = (isActiveState) => {
  if (isActiveState) {
    mapFiltersElement.classList.remove('ad-form--disabled');
    for (const child of mapFiltersChildrenElements) {
      child.disabled = false;
    }
  } else {
    mapFiltersElement.classList.add('ad-form--disabled');
    for (const child of mapFiltersChildrenElements) {
      child.disabled = true;
    }
  }
};

const resetMapFilterForm = () => {
  mapFiltersElement.reset();
};

export {
  changeStateAdForm,
  changeStateMapFilterForm,
  resetMapFilterForm
};
