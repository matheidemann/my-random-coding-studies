import championDataArr from './data.js';

(function readyJS(win, doc) {

    'use strict';

    const sliderContainer = doc.querySelector('.slider-container');

    sliderContainer.innerHTML = championDataArr.map((champ, slideIndex) => {
        const { img, name, role, text, quote } = champ;
        let position = 'next';
        if (slideIndex == 0) {
            position = 'active';
        }
        if (slideIndex == championDataArr.length - 1) {
            position = 'last';
        }



        return `<article class="slide flex ${position}">
        <img src="${img}" class="img" alt="${name}">
        <h2 class="name">${name}</h2>
        <h3 class="role">${role}</h3>
        <p class="text">${text}</p>
        <div class="read-more">
            <span>Ler mais...</span>
        </div><!-- read-more -->

        <div class="quote flex">
            <p class="quote-text">${quote}</p>
            <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
            </div><!-- quote-icon -->
        </div><!-- quote -->

    </article><!-- slide -->`
    }).join('');

    const readMore = doc.querySelectorAll('.read-more');;
    readMore.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const slideParent = e.currentTarget.parentElement;
            const slideText = slideParent.querySelector('.text')
            if (slideParent.classList.contains('active')) {
                if (!slideText.classList.contains('show')) {
                    slideText.classList.add('show')
                } else {
                    slideText.classList.remove('show')
                }
            }
        })
    });

    const nextBtn = doc.querySelector('.next-btn');
    const prevBtn = doc.querySelector('.prev-btn');

    const startSlider = (btnType) => {
        const active = sliderContainer.querySelector('.active');
        let last = sliderContainer.querySelector('.last');
        let next = active.nextElementSibling;

        readMoreHide(active);

        if (next == null) {
            next = sliderContainer.firstElementChild;
        };

        active.classList.remove('active');
        last.classList.remove('last');
        next.classList.remove('next');

        if (btnType == 'prev') {
            last.classList.add('active');
            active.classList.add('next');
            next.classList.add('next');

            if (last.previousElementSibling == null) {
                last = sliderContainer.lastElementChild;
                last.classList.add('last');
                last.classList.remove('next');
                return
            };

            last.previousElementSibling.classList.add('last');
            last.previousElementSibling.classList.remove('next');
            return;
        }

        active.classList.add('last');
        last.classList.add('next');
        next.classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        startSlider('next');
    });

    prevBtn.addEventListener('click', () => {
        startSlider('prev');
    })

    const readMoreHide = (activeSlide) => {
        const activeText = activeSlide.querySelector('.text');
        if (activeText.classList.contains('show')) {
            activeText.classList.remove('show');
        }
    }


})(window, document);