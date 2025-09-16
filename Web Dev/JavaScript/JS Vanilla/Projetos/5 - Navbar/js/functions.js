(function readyJS(win, doc) {

    "use strict";

    /* VARIABLES */
    const toggleBtn = doc.querySelector(".navbar-toggle")
    const links = doc.querySelector(".links")

    /* FUNCTIONS */
    function showHideMenu(event) {
        if (event.target.classList.contains("fa-bars")) {
            links.classList.toggle("links-show")
        }
        else {
            if (links.classList.contains("links-show")) {
                links.classList.remove("links-show")
            }
        }
    }

    /* EVENT */
    doc.addEventListener("click", showHideMenu, false);

})(window, document);