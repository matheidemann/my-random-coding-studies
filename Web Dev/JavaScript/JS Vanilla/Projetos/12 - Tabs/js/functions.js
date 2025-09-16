(function readyJS(win, doc) {
    'use strict'

    const content = [
        {
            title: 'Pulsar',
            text: 'A pulsar is a highly magnetized rotating compact star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth, and is responsible for the pulsed appearance of emission.',
            img: 'space1',
        },
        {
            title: 'Nebula',
            text: 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, the term was used to describe any diffused astronomical object, including galaxies beyond the Milky Way.',
            img: 'space2',
        },
        {
            title: 'Black Hole',
            text: 'A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of no escape is called the event horizon. Although it has an enormous effect on the fate and circumstances of an object crossing it, according to general relativity it has no locally detectable features. In many ways, a black hole acts like an ideal black body, as it reflects no light.',
            img: 'space3',
        }
    ]


    const containerTabText = doc.querySelector('.container-tab-text');
    const tabBtns = doc.querySelectorAll('.btn');
    const textTitle = doc.querySelector('.text-title');
    const textContent = doc.querySelector('.text-content');
    const img = doc.querySelector('.img img');

    containerTabText.addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        if (id) {
            tabBtns.forEach(function (btn) {
                btn.classList.remove('active-tab');
            })
            e.target.classList.add('active-tab')
            for (let i = 0; i < content.length; i++) {
                const value = content[i].title.split(" ").join("").toLowerCase();
                if (value == id) {
                    textTitle.innerHTML = content[i].title;
                    textContent.innerHTML = content[i].text;
                    img.setAttribute('src', `../images/${content[i].img}.jpg`);
                };
            }
        }
    })

})(window, document);