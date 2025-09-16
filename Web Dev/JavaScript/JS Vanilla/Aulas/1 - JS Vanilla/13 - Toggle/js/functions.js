(function ReadyJS(win, doc) {
	'use strict';

	let menuMobile = document.querySelector('.menu-hamburguer img');
	let menuMobileList = document.querySelector('.menu-mobile-box');

	function ToggleMenu() {
		if (menuMobileList.classList.contains('hide')) {
			menuMobileList.classList.remove('hide');
			menuMobile.setAttribute('src', '../images/close.png');
		} else {
			menuMobileList.classList.add('hide');
			menuMobile.setAttribute('src', '../images/menu.png');
		}
	}

	menuMobile.addEventListener('click', ToggleMenu, false);
})(window, document);
