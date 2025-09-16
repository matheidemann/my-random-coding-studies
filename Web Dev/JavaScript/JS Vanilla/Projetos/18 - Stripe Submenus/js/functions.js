import menuValues from './data.js';

(function readyJS(win, doc) {
    'use strict';

    /* VARS */
    const sidebarLinks = doc.querySelector('.sidebar-links');
    const hamburguerMenuBtn = doc.querySelector('.btn-hamburguer');
    const hamburguerCloseBtn = doc.querySelector('.close-btn');
    const sidebarWrapper = doc.querySelector('.sidebar-wrapper');
    const linksBtns = [...doc.querySelectorAll('.link-btn')];
    const submenu = doc.querySelector('.submenu-container')
    const header = doc.querySelector('.header');
    const mainContainer = doc.querySelector('.main-container');

    /* EVENTS */
    hamburguerMenuBtn.addEventListener('click', () => {
        sidebarWrapper.classList.toggle('show');
    });

    hamburguerCloseBtn.addEventListener('click', () => {
        sidebarWrapper.classList.toggle('show');
    });

    sidebarLinks.innerHTML = menuValues.map((item) => {
        const { title, links } = item;
        return `<article>
        <h4>${title}</h4>
        <div class="sidebar-links grid">
            ${links.map((link) => {
            const { label, icon, url } = link;
            return `<a class="sidebar-link" href="#${url}">
            <i class="${icon}"></i>
            ${label}
        </a>`;
        }).join('')}
        </div>
    </article>`;
    }).join('');

    linksBtns.forEach((btn) => {
        btn.addEventListener('mouseover', function (e) {
            const btnText = e.currentTarget.textContent;
            const tempBtn = e.currentTarget.getBoundingClientRect();
            const bottom = tempBtn.bottom - 3;
            const center = (tempBtn.right + tempBtn.left) / 2;
            const tempPage = menuValues.find(({ title }) => title == btnText);

            if (tempPage) {
                submenu.classList.add('show');
                submenu.style.top = `${bottom}px`;
                submenu.style.left = `${center}px`;

                const { title, links } = tempPage;
                submenu.innerHTML = `<h4>${title}</h4>
                <div class="submenu-links flex">
                ${links.map((link) => {
                    const { label, icon } = link;
                    return `<a class="submenu-link">
                    <i class="${icon}"></i>
                    ${label}
                </a><!-- submenu-link -->`
                }).join('')}
                </div>`;
            };
        });
    });

    mainContainer.addEventListener('mouseover', function (e) {
        submenu.classList.remove('show');
    });

    header.addEventListener('mouseover', function (e) {
        if (!e.target.classList.contains('link-btn')) {
            submenu.classList.remove('show');
        };
    });

})(window, document);