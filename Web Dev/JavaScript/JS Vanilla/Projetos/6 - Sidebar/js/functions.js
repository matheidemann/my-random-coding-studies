(function readyJS(win, doc) {
    "use strict";
    const toggleSidebarBtn = doc.querySelector(".sidebar-toggle > i");
    const closeSidebarBtn = doc.querySelector(".fa-times");
    const sidebar = doc.querySelector(".sidebar");

    toggleSidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show-hide-sidebar");
    }, false)

    closeSidebarBtn.addEventListener("click", function () {
        sidebar.classList.remove("show-hide-sidebar");
    }, false)

    function teste(e) {
        e.preventDefault();
        if (e.target.classList.contains('background')) {
            sidebar.classList.remove("show-hide-sidebar");
        }
    }
    doc.addEventListener("click", teste, false)
})(window, document);