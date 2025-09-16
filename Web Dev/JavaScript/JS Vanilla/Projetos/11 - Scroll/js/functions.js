(function readyJS(win, doc) {
    'use strict';

    //DYNAMIC DATE
    const docDate = doc.querySelector('.date');
    docDate.innerHTML = new Date().getFullYear();

    //NAVBAR TOGGLE (DYNAMIC)
    const navbarToggleBtn = doc.querySelector('.navbar-toggle');
    const linksContainer = doc.querySelector('.links-container');
    const links = doc.querySelector('.links');

    navbarToggleBtn.addEventListener('click', function () {
        const linksHeight = links.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        if (linksContainerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
        } else {
            linksContainer.style.height = 0;
        }
    }, false);

    //FIXED NAVBAR && TOPLINK
    const navbar = doc.querySelector('.nav');
    const topLink = doc.querySelector('.toplink');

    window.addEventListener('scroll', function () {
        const navbarHeight = navbar.getBoundingClientRect().height;
        if (window.pageYOffset > navbarHeight) {
            navbar.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('fixed-nav');
        }

        if (window.pageYOffset > 500) {
            topLink.classList.add('show-toplink');
        } else {
            topLink.classList.remove('show-toplink');
        }
    });

    //SCROLL
    const navHeightDefaultHeight = navbar.getBoundingClientRect().height;
    const linkBtn = doc.querySelectorAll('.scroll-link');

    linkBtn.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = doc.getElementById(id);
            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains('fixed-nav');
            let position = element.offsetTop - navHeight;

            //ARRUMA O PROBLEMA PARA QUANDO A NAV NÃO ESTIVER FIXA EM MODO MOBILE
            if (!fixedNav) {
                if (navHeight > navHeightDefaultHeight) {
                    position = position - navHeightDefaultHeight;
                }
            }

            //ARRUMA A POSIÇÃO DA NAV PARA MOBILE POR CONTA DO CONTAINER DOS LINKS
            if (navHeight > navHeightDefaultHeight) {
                position = position + containerHeight;
            }

            //SCROLLA ATÉ ONDE FOI DEFINIDO
            window.scrollTo({
                left: 0,
                top: position,
            });

            //SETA O LINKSCONAINER PARA ALTURA 0 PARA DESAPARECER QUANDO SE CLICA NO MOBILE
            linksContainer.style.height = 0;

        }, false);
    })
})(window, document);