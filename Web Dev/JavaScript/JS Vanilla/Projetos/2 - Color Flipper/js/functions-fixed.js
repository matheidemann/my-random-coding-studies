(function ReadyJS(win, doc) {
    'use strict';

    const simpleColors = ['Green', 'Red', 'rgba(133, 122, 200, 1)', '#f15025', 'hsl(308, 91%, 48%)'];

    const myBtn = document.querySelector('.btn');
    const myMain = document.querySelector('.main');
    const mySpan = document.querySelector('.main span');
    let i = 0;

    myBtn.addEventListener('click', function () {
        myMain.style.backgroundColor = simpleColors[i];
        mySpan.innerHTML = simpleColors[i];
        i++;
        if (i == simpleColors.length) {
            i = 0;
        }
    }, false);

})(window, document);