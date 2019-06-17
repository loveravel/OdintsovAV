'use strict';

const navigationToggle = document.querySelector(`.navigation__toggle`);
const navigationList = document.querySelector(`.navigation__list`);

const onNavigation = () => {
  if (navigationList.classList.contains(`navigation__list--open`)) {
    navigationList.classList.remove(`navigation__list--open`);
    navigationToggle.classList.remove(`navigation__toggle--open`);
  } else {
    navigationList.classList.add(`navigation__list--open`);
    navigationToggle.classList.add(`navigation__toggle--open`);
  }
};

navigationToggle.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  onNavigation();
});
