(function readyJS(win, doc) {
    'use strict';

    const btnPlayPause = doc.querySelector('.switch-btn');
    const videoProject = doc.querySelector('.video-container');

    btnPlayPause.addEventListener('click', function () {
        if (!btnPlayPause.classList.contains('slide')) {
            btnPlayPause.classList.add('slide');
            videoProject.pause();
        }
        else {
            btnPlayPause.classList.remove('slide');
            videoProject.play();
        }
    }, false)

    //PRELOADER
    const preloader = doc.querySelector('.preloader');

    win.addEventListener('load', function () {
        setInterval(() => {
            preloader.classList.add('hide-preloader');
        }, 5000);
        setInterval(() => {
            preloader.classList.add('disable-preloader');
        }, 5200);
    }, false)

}(window, document));