document.addEventListener("DOMContentLoaded", () => {

	// Добавляем класс scroll в шапку
	const header = document.querySelector('.header');
	const buttonPosts = document.querySelector('.posts__btn');
	const articlesPosts = document.querySelectorAll('.posts__article');
	const gridsPosts = document.querySelectorAll('.posts__grid');
	const postItemCopyOne = articlesPosts[0].cloneNode(true);
	const postItemCopyTwo = articlesPosts[1].cloneNode(true);
	const postItemCopyThree = articlesPosts[2].cloneNode(true);
	const postItemCopyFour = articlesPosts[3].cloneNode(true);

	window.addEventListener('scroll', () => {
		let y = window.pageYOffset;

		if (y > 55) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	});

	buttonPosts.addEventListener('click', () => {
		gridsPosts[1].append(postItemCopyThree);
		gridsPosts[1].append(postItemCopyFour);

		gridsPosts[1].append(postItemCopyOne);
		gridsPosts[1].append(postItemCopyTwo);
		buttonPosts.remove();
	});


	// Меню
	const navButton = document.querySelector('.nav__button');
	const navMenu = document.querySelector('.nav__menu');
	const burgerItrem = document.querySelectorAll('.burger__item');


	navButton.addEventListener('click', function (evt) {
		evt.preventDefault();
		if (navMenu.classList.contains('nav__menu--show')) {
			navMenu.classList.remove('nav__menu--show');
			burgerItrem[0].classList.remove('burger__item--first');
			burgerItrem[1].classList.remove('burger__item--second');
			burgerItrem[2].classList.remove('burger__item--last');
			navButton.classList.remove('nav__button--close');
		} else {
			navMenu.classList.add('nav__menu--show');
			burgerItrem[0].classList.add('burger__item--first');
			burgerItrem[1].classList.add('burger__item--second');
			burgerItrem[2].classList.add('burger__item--last');
			navButton.classList.add('nav__button--close');
		}
	});
});