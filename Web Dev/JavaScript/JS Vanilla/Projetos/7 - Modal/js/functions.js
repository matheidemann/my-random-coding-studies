(function readyJS(win, doc) {
    "use strict";

    const modalBtn = doc.querySelector(".btn");
    const modalConteiner = doc.querySelector(".modal-conteiner");
    const closeModalBtn = doc.querySelector(".fa-times");

    modalBtn.addEventListener("click", function () {
        modalConteiner.classList.add("modal-view-hide");
    }, false);

    closeModalBtn.addEventListener("click", function () {
        modalConteiner.classList.remove("modal-view-hide");

    }, false);
})(window, document);