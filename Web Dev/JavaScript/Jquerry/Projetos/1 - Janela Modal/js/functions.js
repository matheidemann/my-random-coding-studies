$(function () {

    //VARS
    let close = $('body, .btn-fechar');
    let modal = $('.modal');
    let form = $('form');

    //OPEN MODAL
    $('.btn').on('click', function (e) {
        e.stopPropagation();
        modal.fadeIn('fast');
        modal.css('display', 'flex');
    });

    //CLOSE MODAL
    close.on('click', function () {
        modal.fadeOut('fast');
    });

    //DON'T CLOSE IF THE CLICK IS AT FORM
    form.on('click', function (e) {
        e.stopPropagation();
    })



    // form.on('submit', function (e) {
    //     e.preventDefault();
    //     const nome = $('input[name=nome]').val();
    //     const email = $('input[name=email]').val();
    //     const telefone = $('input[name=telefone]').val();

    //     const nameVerify = /[A-Z][a-z]/gi;
    //     const emailVerify = /^(.*?)@(.*?)$/gi;
    //     const numberVerify = /[0-9]/gi;

    //     const nameValue = nome.split(' ');

    //     console.log(nome.match(nameVerify));

    //     //VALIDAÇÃO DE NOME
    //     if (nome.match(nameVerify) || nameValue.length >= 2) {
    //         for (let i = 1; i < nameValue.length; i++) {
    //             if (nameValue[i] == '') {
    //                 return false;
    //             } else {
    //                 console.log('Tudo Ok');
    //             }
    //         };
    //     } else {
    //         return false;
    //     };

    //     //VALIDAÇÃO DE EMAIL
    //     if (email.match(emailVerify)) {
    //         console.log('lança');
    //     }

    // });


});