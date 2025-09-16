(function readyJS(win, doc) {
    'use strict';

    //DATA
    const menu = [
        {
            id: 1,
            title: "buttermilk pancakes",
            category: "breakfast",
            price: 15.99,
            img: "../images/item-1.jpeg",
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: "diner double",
            category: "lunch",
            price: 13.99,
            img: "../images/item-2.jpeg",
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: "godzilla milkshake",
            category: "shakes",
            price: 6.99,
            img: "../images/item-3.jpeg",
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: "country delight",
            category: "breakfast",
            price: 20.99,
            img: "../images/item-4.jpeg",
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: "egg attack",
            category: "lunch",
            price: 22.99,
            img: "../images/item-5.jpeg",
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: "oreo dream",
            category: "shakes",
            price: 18.99,
            img: "../images/item-6.jpeg",
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: "bacon overflow",
            category: "breakfast",
            price: 8.99,
            img: "../images/item-7.jpeg",
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: "american classic",
            category: "lunch",
            price: 12.99,
            img: "../images/item-8.jpeg",
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: "quarantine buddy",
            category: "shakes",
            price: 16.99,
            img: "../images/item-9.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
            id: 10,
            title: "steak dinner",
            category: "dinner",
            price: 39.99,
            img: "../images/item-10.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];

    //GLOBAL VARS
    const menuOptions = doc.querySelector('.menu-options');
    const filterSelect = doc.querySelector('.filter-select');

    //FUNCTIONS
    //DISPLAY FILTERED MENU
    function displayFilteredMenu(selectedFilter) {
        let displayMenu = selectedFilter.map(function (item) {
            //está retornando para o novo array "displayMenu" cada objeto do meu array "menu" /ATENÇÃO:  TEMPLATE STRING É COM CRASE
            return `<article class="option grid">
                <div class="option-img">
                    <img src=${item.img}>
                </div>
                <div class="option-details">
                    <header class="option-header flex">
                        <h4>${item.title}</h4>
                        <h4>$${item.price}</h4>
                    </header>
                    <p class="option-text">${item.desc}</p>
                </div>
            </article>`;
        });
        displayMenu = displayMenu.join(''); //TRANSFORMA TUDO EM UMA STRING, E AS ASPAS SÃO PARA REMOVER AS VIRGULAS ENTRE CADA OBJETO
        menuOptions.innerHTML = displayMenu;
    }

    //BTNS
    function displayAllBtns() {
        //GET ALL UNIQUE CATEGORIES
        const allCategories = menu.reduce(
            function (values, item) { //o item faz referência a cada item do meu array "menu"
                if (!values.includes(item.category)) { //se meu array não conter a categoria do item...
                    values.push(item.category); //adicione essa categoria no meu array final feito com o reduce
                }
                return values;
            },
            ['all']); //o param "values" faz referência a esse array no fim

        //DISPLAY ALL UNIQUE CATEGORIES AS BTNS
        const displayAllBtnCategories = allCategories.map(function (singleCategory) {
            return `<button class="btn"
            data-filter="${singleCategory}">${singleCategory}</button>`;
        }).join('');
        filterSelect.innerHTML = displayAllBtnCategories;

        //CREATE A SELECTOR FOR BTN CLASSES (PRECISA SER DEPOIS DE COLOCAR O HTML PELO JS, CASO O CONTRÁRIO NÃO SERÁ ENCONTRADO)
        const filterBtns = doc.querySelectorAll('.btn');

        //BTNS CLICK EVENT
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const selectedCategory = e.currentTarget.dataset.filter;
                const menuFiltered = menu.filter(function (menuItem) {
                    return menuItem.category === selectedCategory;
                })
                if (selectedCategory === 'all') {
                    displayFilteredMenu(menu);
                }
                else {
                    displayFilteredMenu(menuFiltered);
                }
            })
        });
    };

    //ON DOC START
    win.addEventListener('DOMContentLoaded', function () {
        displayFilteredMenu(menu);
        displayAllBtns();
    });

})(window, document);