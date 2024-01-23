/* в этот файл добавляет скрипты*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.main-nav');
let menuLinks = menu.querySelectorAll('.main-nav__item-link');

menu.classList.remove('main-nav--nojs');
burger.classList.remove('burger--nojs');

burger.addEventListener('click',
function(){
    burger.classList.toggle('burger--active');
    menu.classList.toggle('main-nav--active');
});

menuLinks.forEach(function(el){
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('main-nav--active');
    });
});
