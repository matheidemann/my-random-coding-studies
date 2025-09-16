(function readyJS(win, doc) {

    'use strict';

    /* VARIABLES */
    const films = [
        {
            id: "1",
            name: "Interstellar",
            img: "../images/interstellar.png",
            genre: "Science-fiction Drama",
            description: "Earth's future has been riddled by disasters, famines, and droughts.There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
        },
        {
            id: "2",
            name: "Scarface",
            img: "../images/scarface.png",
            genre: "Drama",
            description: "When Castro opened the port at Mariel Harbor, thousands of Cubans fled to the United States. One is a young tough named Antonio (Tony) Montana, who, with his friend Manny Ray, starts in with Miami's cocaine trade. He survives attack by chainsaw after a deal goes bad, and several other attempts by other dealers to eliminate him. Eventually the grandiose Montana becomes head of a cocaine cartel. But his enemies start coming after him, and his paranoia threatens to drive Montana's empire into the ground...",
        },
        {
            id: "3",
            name: "Fight Club",
            img: "../images/fight-club.png",
            genre: "Psychological Drama",
            description: "An insomniac unnamed narrator needs a fantasy to escape from his deadly boring life, he tries joining a cancer support group however the only thing they do in the group is cry into each others chest, but then he is on a plane on his way back from what a viewer would assume is a business trip our unnamed narrator encounters Tyler Durden, a soap selling bad-ass who happens to run a secret fight club in the diner parking lot with his friend who follows 8 simple rules set out by Tyler, our unnamed narrator of course is taken into this scheme ran by Tyler.",
        },
        {
            id: "4",
            name: "The Wolf Of Wall-Street",
            img: "../images/wall-street.png",
            genre: "Drama",
            description: "In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called ''The Wolf Of Wall St.''. With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?",
        },
    ]

    let currentIndex = 0;

    /* MOVIE PROPERTIES */
    let movieImg = doc.querySelector(".movie-img");
    let movieName = doc.querySelector(".movie-name");
    let movieGenre = doc.querySelector(".movie-genre");
    let movieDesc = doc.querySelector(".movie-description");

    /* BTNS */
    let prevBtn = doc.querySelector(".prev-btn > i");
    let nextBtn = doc.querySelector(".next-btn > i");
    let randomBtn = doc.querySelector(".random-btn");
    let readMoreBtn = doc.querySelector(".read-more");
    let showText = false;

    /* ---------------------------------------------------------------- */
    /* FUNCTIONS */
    /* INDEX CHECKER */
    function indexChecker() {
        if (currentIndex < 0) {
            currentIndex = films.length - 1;
        }
        else if (currentIndex == films.length) {
            currentIndex = 0;
        }
    }

    /* MOVIE CHANGE */
    function movieChange() {
        const item = films[currentIndex];
        movieImg.style.backgroundImage = "url(" + item.img + ")";
        movieName.textContent = item.name;
        movieGenre.textContent = item.genre;
        movieDesc.textContent = item.description;
    }

    /* READMORE CHECKER */
    function readMoreChecker() {
        if (showText == false) {
            movieDesc.style.maxHeight = '25rem';
            movieDesc.style.overflow = 'visible';
            showText = true;
        }
        else if (showText == true) {
            movieDesc.style.maxHeight = '3rem';
            movieDesc.style.overflow = 'hidden';
            showText = false;
        }
    }

    /* ---------------------------------------------------------------- */
    /* EVENTS */
    /* READ MORE */
    readMoreBtn.addEventListener('click', function (e) {
        readMoreChecker();
    })

    /* PREV BUTTON */
    prevBtn.addEventListener('click', function (e) {
        currentIndex--;
        showText = true;
        indexChecker();
        readMoreChecker();
        movieChange();
    }, false);

    /* NEXT BUTTON */
    nextBtn.addEventListener('click', function (e) {
        currentIndex++;
        showText = true;
        indexChecker();
        readMoreChecker();
        movieChange();
    }, false);

    /* SURPRISE ME BUTTON */
    randomBtn.addEventListener('click', function (e) {
        currentIndex = Math.floor(Math.random() * films.length);
        showText = true;
        indexChecker();
        readMoreChecker();
        movieChange();
    }, false);

})(window, document);