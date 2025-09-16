(function ReadyJS(win, doc) {

    'use strict';

    /*{ //APENAS MOSTRAR OU ESCONDER
        function ShowHide(event) { //FAZ A CHECAGEM SE O CLICK FOI EM CIMA DE ALGUM ELEMENTO COM A CLASSE TOGGLE-TEXT
            if (!event.target.classList.contains('toggle-text')) {
                return
            }
            let content = document.querySelector(event.target.hash);
            content.classList.toggle('hidden');
            event.preventDefault();
        };

        document.addEventListener('click', ShowHide, false);
    }*/

    {
        function ShowHide(event) { //FAZ A CHECAGEM SE O CLICK FOI EM CIMA DE ALGUM ELEMENTO COM A CLASSE TOGGLE-TEXT

            event.preventDefault(); //previne que as tags 'a' façam com que a página vá para onde o ID está 

            if (!event.target.classList.contains('toggle-text')) {      //se onde for clicado na tela NÃO conter a classe 'toggle-text' (classe dos 'a')
                return                                                  //retorna e não executada nada abaixo
            }

            let content = document.querySelector(event.target.hash);     //seleciona o hash (ID) que a tag 'a' está fazendo referência
            let selectedLink = event.target;                            //seleciona a tag 'a' que eu clicar

            if (!content.classList.contains('hidden')) {                //se NÃO tiver a classe hidden...
                content.classList.add('hidden');                        //adiciona a classe hidden
                selectedLink.innerHTML = 'Mostrar mais...';             //vai modificar o texto do 'a' que eu clicar
                return;                                                 //é preciso retornar nesse caso, pois mais abaixo há uma...  
            }                                                           //...declaração de remove da classe, fazendo com que nada disso surta efeito

            let textList = document.querySelectorAll('.text');          //seleciona todos os textos
            let linkList = document.querySelectorAll('.toggle-text');   //seleciona todos os 'a'

            for (let i = 0; i < textList.length; i++) {      //este loop adiciona a classe hidden em todos os elementos
                textList[i].classList.add('hidden');         //adiciona a classe hidden para todos os textos
                linkList[i].innerHTML = 'Mostrar mais...';   //modificar o HTML de todos os links
            }

            selectedLink.innerHTML = 'Mostrar menos...';    //modifica o HTML do 'a' que eu clicar para mostrar
            content.classList.remove('hidden');             //esta declaração remove a classe hidden do elemento clicado a qual faz referência

        };

        document.addEventListener('click', ShowHide, false); //caso eu clique no meu documento, ele chamará a função ShowHide
    }



})(window, document);