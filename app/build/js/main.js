// Меню
var navButton = document.querySelector('.nav__button');
var navMenu = document.querySelector('.nav__menu');
var firstButtonItem = document.querySelector('.burger__item-first');
var secondButtonItem = document.querySelector('.burger__item-second');
var lastButtonItem = document.querySelector('.burger__item-last');


navButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (navMenu.classList.contains('nav__menu--show')) {
        navMenu.classList.remove('nav__menu--show');
        firstButtonItem.classList.remove('burger__item--first');
        secondButtonItem.classList.remove('burger__item--second');
        lastButtonItem.classList.remove('burger__item--last');
        navButton.classList.remove('nav__button--close');
    } else {
        navMenu.classList.add('nav__menu--show'); 
        firstButtonItem.classList.add('burger__item--first');
        secondButtonItem.classList.add('burger__item--second');
        lastButtonItem.classList.add('burger__item--last');
        navButton.classList.add('nav__button--close'); 
    }
});