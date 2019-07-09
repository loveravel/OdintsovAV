'use strict';

const servicesItems = document.querySelectorAll(`.services__item`);
const servicesNavigationItems = document.querySelectorAll(`.promo__link`);

servicesNavigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener(`click`, (evt) => {
    if (!evt.target.classList.contains(`promo__link--active`)) {
      document.querySelector(`.promo__link--active`)
        .classList.remove(`promo__link--active`);
      evt.target.classList.add(`promo__link--active`);

      servicesItems.forEach((servicesItem) => {
        if (servicesItem.querySelector(`.services__name a`).innerHTML
          === evt.target.innerHTML) {
          document.querySelector(`.services__name--active`)
            .classList.remove(`services__name--active`);
          document.querySelector(`.services__info--active`)
            .classList.remove(`services__info--active`);

          servicesItem.querySelector(`.services__name`)
            .classList.add(`services__name--active`);
          servicesItem.querySelector(`.services__info`)
            .classList.add(`services__info--active`);
        }
      });
    }
  })
});

servicesItems.forEach((servicesItem) => {
  servicesItem.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if(!evt.target.classList.contains(`services__name--active`)) {
      document.querySelector(`.services__name--active`)
        .classList.remove(`services__name--active`);
      document.querySelector(`.services__info--active`)
        .classList.remove(`services__info--active`);

      evt.target.classList.add(`services__name--active`);
      servicesItem.querySelector(`.services__info`)
        .classList.add(`services__info--active`);

      servicesNavigationItems.forEach((navigationItem) => {
        const servicesLink = servicesItem.querySelector(`a`);
        if (navigationItem.innerHTML === servicesLink.innerHTML) {
          document.querySelector(`.promo__link--active`)
            .classList.remove(`promo__link--active`);

          navigationItem.classList.add(`promo__link--active`);
        }
      });
    }
  });
});


