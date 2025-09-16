(function ReadyJS(win, doc) {
    'use strict';

    let myGallery = document.querySelector('#img-gallery');
    let myInputFiles = document.querySelector('#img-input');

    function ImgPreview(event) {
        myGallery.innerHTML = ''; //reseta a galeria
        let uploadedImgs = event.target.files; //define a quantidade de fotos que foram uplodadas
        for (let index = 0; index < uploadedImgs.length; index++) { //repete uma função de preview para cada img
            let reader = new FileReader(); //chama o construtor FileReader
            reader.onload = function (event) {  //quando o filereader carregar, executa a seguinte função
                let previewImg = doc.createElement('img'); //cria uma variável do qual criará uma nova img de preview
                previewImg.setAttribute('src', event.target.result); //atributo que faz referência ao result da preview, permitindo ver a img 
                previewImg.style.width = '100px';
                previewImg.style.margin = '10px';
                myGallery.appendChild(previewImg); //coloca a img preview no html da gallery
            };
            reader.readAsDataURL(uploadedImgs[index]); //necessário para que a data seja lida como uma URL
        }
    }

    myInputFiles.addEventListener('change', ImgPreview, false);
})(window, document);
