'use strict';

const servicesItems = document.querySelectorAll(`.services__item`);

servicesItems.forEach((item) => {
  item.addEventListener(`click`, (evt) => {
     evt.preventDefault();
    if(!evt.target.classList.contains(`services__name--active`)) {
      document.querySelector(`.services__name--active`)
        .classList.remove(`services__name--active`);
      document.querySelector(`.services__info--active`)
        .classList.remove(`services__info--active`);

      evt.target.classList.add(`services__name--active`);
      item.querySelector(`.services__info`)
        .classList.add(`services__info--active`);
    }
  });
});
