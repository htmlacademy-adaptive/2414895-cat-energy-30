/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-nav');
const menuLinks = menu.querySelectorAll('.main-nav__item-link');
const map = document.querySelector('.contacts__map-image');

menu.classList.remove('main-nav--nojs');
burger.classList.remove('burger--nojs');
map.classList.remove('contacts__map-image--nojs');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('main-nav--active');
});

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('main-nav--active');
  });
});
