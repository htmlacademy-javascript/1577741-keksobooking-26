const URL_GET_DATA = 'https://26.javascript.pages.academy/keksobooking/data';
const URL_SEND_DATA = 'https://26.javascript.pages.academy/keksobooking';
const ITEMS_PER_PORTION = 10;

const getData = (onSuccess, onFail) => {
  fetch(URL_GET_DATA)
    .then((response) => response.json())
    .then(onSuccess)
    .catch((err) => {
      onFail(err);
    });
};

const sendData = (onSuccess, onFail, formData) => {
  fetch(
    URL_SEND_DATA,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      throw Error('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .catch((err) => {
      onFail(err);
    });
};

const prepareData = (items) => items.slice(0, ITEMS_PER_PORTION);

export {
  getData,
  sendData,
  prepareData
};
