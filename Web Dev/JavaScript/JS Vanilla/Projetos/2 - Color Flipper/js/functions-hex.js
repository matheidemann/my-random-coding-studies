(function ReadyJS(win, doc) {
    'use strict';

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    const myBtn = document.querySelector('.btn');
    const myMain = document.querySelector('.main');
    const mySpan = document.querySelector('.main span');

    myBtn.addEventListener('click', function () {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomNumber()];
        }
        myMain.style.backgroundColor = hexColor;
        mySpan.innerHTML = hexColor;
    }, false);

    function generateRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }

})(window, document);