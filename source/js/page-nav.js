'use strict';

(function () {
  var navButton = document.querySelector('.page-nav__toggle');
  var navList = document.querySelector('.page-nav__list');

  navButton.addEventListener('click', function (e) {
    e.preventDefault();
    toggleNav();
  });

  function toggleNav() {
    if (document.querySelector('.page-nav__toggle--open')) {
      navButton.classList.remove('page-nav__toggle--open');
      navButton.classList.add('page-nav__toggle--close');
      navList.style = 'display: none';
    } else {
      navButton.classList.remove('page-nav__toggle--close');
      navButton.classList.add('page-nav__toggle--open');
      navList.style = 'display: flex';
    }
  }
})();
