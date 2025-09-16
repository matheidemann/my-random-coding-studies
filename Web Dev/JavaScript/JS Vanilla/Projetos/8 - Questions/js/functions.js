(function readyJS(win, doc) {
    'use strict';

    const questions = doc.querySelectorAll('.question');
    const btnShowHideText = doc.querySelectorAll('.show-hide-btn');

    btnShowHideText.forEach(function (btn) {
        const currentQuestion = btn.parentElement.parentElement;

        btn.addEventListener('click', function (e) {
            questions.forEach(function (item) {
                if (item !== currentQuestion) {
                    item.classList.remove('show-text');
                }
            })
            currentQuestion.classList.toggle('show-text')
        }, false)
    })

})(window, document);