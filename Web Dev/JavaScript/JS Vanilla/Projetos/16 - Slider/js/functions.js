(function readyJS(win, doc) {
    'use strict';

    const slides = doc.querySelectorAll('.slide-item');
    const sliderContainer = doc.querySelector('.slider-container');
    const slideBtnsContainer = doc.querySelector('.slide-btns-container');
    let counter = 0;

    win.addEventListener('DOMContentLoaded', function () {
        slides.forEach(function (slide, index) {
            slide.style.left = `${index * 100}%`;
        });
    });

    sliderContainer.addEventListener('click', function (e) {
        const btn = e.target.innerHTML.toUpperCase();
        if (btn == 'PREV') {
            counter--;
            checkSlideIndex();
        }
        else if (btn == 'NEXT') {
            counter++;
            checkSlideIndex();
        }

    })

    sliderContainer.addEventListener('mouseover', function () {
        slideBtnsContainer.style.bottom = `${0}px`;
    })

    sliderContainer.addEventListener('mouseout', function () {
        slideBtnsContainer.style.bottom = `${-100}px`;
    })

    function checkSlideIndex(value, btnType) {
        if (counter < 0) {
            counter = slides.length - 1;
        }
        else if (counter > slides.length - 1) {
            counter = 0;
        };
        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }

})(window, document);