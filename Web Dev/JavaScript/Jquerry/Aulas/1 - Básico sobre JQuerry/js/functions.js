


{//CALLING A JQUERRY FUNCTION

    //NORMAL FUNC
    $(function () {
        console.log('Normal function');
    });

    //ARROW FUNC
    $(() => {
        console.log('Arrow function');
    });

    //EVENTS WHEN THE PAGE LOADS
    $(document).ready(() => {
        console.log('.READY');
    });

    $(window).on('load', () => {
        console.log('.ON LOAD');
    });
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //MANIPULATING CSS TROUGHT JQUERRY

    //SETTING A VALUE
    $('.div1').css('background-color', 'red').css('color', 'black').css('font-weight', 'bold');


    //RETURNING A VALUE
    console.log($('.div1').css('background-color'));
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //EVENTS
    //PS: O CORRETO É UTILIZAR O ".ON()" PARA ADICIONAR EVENTOS, UMA VEZ QUE ELES PERMITEM COLOCAR EVENTOS DINAMICAMENTE

    //CLICK
    $('#btn1').click(() => {
        $('.div1').css('letter-spacing', '1rem');
        $('.div1').css('background-color', '#1ba7e7');
    });
    //THERE IS THE "KEYUP" AND "KEYDOWN" EVENTS ASWELL

    //HOVER - 1ST PARAMETER IN HOVERON - 2ND PARAMETER IS HOVEROFF
    //WITH ONLY ONE PARAMETER 
    $('#fictional-name').hover(() => {
        $('.fictional-name').css('background-color', '#af33af')
    });

    //WITH 2 PARAMETERS
    $('#btn2').hover(() => {
        $('.div2').css('background-color', '#af33af');
    }, () => {
        $('.div2').css('background-color', '#727272');
    });

    //FOCUS & BLUR
    //FOCUS
    $('.fictional-name > fictional-name').focus(() => {
        $('.fictional-name > fictional-name').css('transform', 'scale(1.1)')
        $('.fictional-name > fictional-name').css('background-color', '#f6f6f6')
    });

    //BLUR
    $('.fictional-name > fictional-name').blur(() => {
        $('.fictional-name > fictional-name').css('transform', 'scale(1)')
        $('.fictional-name > fictional-name').css('background-color', '#ccc');
    })

    //SHORTHAND WAY (WORKS WITH ANY FUNCTION THAT RETURNS THE OBJECT)
    $('.div3 > input').focus(() => {
        $('.div3 > input').css('transform', 'scale(1.1)')
        $('.div3 > input').css('background-color', '#f6f6f6')
    }).blur(() => {
        $('.div3 > input').css('transform', 'scale(1)')
        $('.div3 > input').css('background-color', '#ccc');
    });

    //SCROLL
    $(window).scroll(() => {
        console.log('Scrolling');
    });

    //REZISE
    $(window).resize(() => {
        console.log('Resizing');
    });
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //VARIABLES
    let element = $('fictional-name');
    element.css('background-color', 'red');
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //WIDTH AND HEIGHT
    let div1 = $('.div1');

    //GET ONLY THE WITDH OF THE ELEMENT (DOESN'T COUNT THE PADDING)
    console.log(`Witdh from div1 = ${div1.width()}`);
    //GET THE FULL WITDH OF THE ELEMENT
    console.log(`Inner Witdh from div1 = ${div1.innerWidth()}`);
    //GET ONLY THE HEIGHT OF THE ELEMENT (DOESN'T COUNT THE PADDING)
    console.log(`Height from div1 = ${div1.height()}`);
    //GET THE FULL HEIGHT OF THE ELEMENT
    console.log(`Inner Height from div1 = ${div1.innerHeight()}`);

    //PS: you can get the total height (including the margin) you should use the prefix 'outer'
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //HTML & TEXT
    let div4 = $('.div4');

    //TO OVERWRITE
    //fictionalName.html('<h2>Texto adicionado viu JQuerry</h2>');

    //TO ADD MORE HTML
    div4.html(div4.html() + '<h2 class="text">Texto adicionado via JQuerry</h2>');

    //TO GET ONLY THE TEXT CONTENT
    console.log(div4.text());

    //TO GET THE VALUE FROM AN FORM ELEMENT
    $('.div4 input').val('Olá mundo!');
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //APPEND/PREPEND & EQ
    //O APPEND COLOCA UM NOVO ELEMENTO NO FIM DO ELEMENTO
    //O EQ PEGA O ÍNDICE DE ALGUM ELEMENTO REPETIDO
    let myBtn = $('#btn3');
    let div4 = $('.div4');
    myBtn.click(() => {
        //APPEND
        div4.eq(1).append('<h3>Texto adicionado APPEND</h3>');
        //APPEND TO
        $('<h3>Texto adicionado APPENDTO</h3>').appendTo(div4.eq(1))

        //APPEND
        div4.eq(1).prepend('<h3>Texto adicionado PREPEND</h3>');
        //APPEND TO
        $('<h3>Texto adicionado PREPEND TO</h3>').prependTo(div4.eq(1));

        //BOTH ARE THE SAME, IT JUST CHANGE HOW IT'S WRITTEN

        //AFTER & BEFORE
        let text = '- Meu texto ';
        //BEFORE
        div4.before(text + ' BEFORE -');
        //AFTER
        div4.after(text + ' AFTER -');

        //REMOVE
        $(div4.eq(0)).remove();
    })
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //ANIMATIONS

    //FADEIN & FADEOUT
    let div5 = $('.div5');
    let div6 = $('.div6');
    let div7 = $('.div7');
    let btn4 = $('#btn4');

    div5.fadeOut(5000, () => {
        console.log('Terminou o FadeOut');
    })
    setTimeout(() => {
        div5.fadeIn(5000);
    }, 6000);

    //SLIDETOGGLE
    btn4.on('click', function () {
        div6.slideToggle(2000);
    })

    //ANIMATE
    div7.on('click', () => {
        div7.animate({
            'width': '200px',
            'padding': '10px',
        }, 2000, () => {
            setTimeout(() => { alert('acabou') }, 3000)
        })
    })

}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //AD AND REMOVE CLASS
    $('fictional-el').addClass('ficional-class');
    $('fictional-el').removeClass('ficional-class');

    //CHANGE / REMOVE ATTR
    $('fictional-el').attr('href', 'http://www.gooogle.com');
    $('fictional-el').removeAttr('href', 'http://www.gooogle.com');

    //FIND SPECIFIC ELEMENT
    $('finctional-el').find('other-ficitonal-el');
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //MOVE AND CLONE ELEMENTS
    let div8 = $('.div8');
    let div9 = $('.div9');
    let div10 = $('.div10');

    //CLONE
    let el = $(div9.find('h2').clone())
    div8.append(el);

    //MOVE
    $(div9.find('h2').appendTo(div10));
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
{
    //AJAX
    $.ajax({
        'url': '../html/external.html',
        //'method':'post',
        //'data':'{'nome':'matheus','idade','22'}', 
    }).done((myData) => {
        $('.div11').append(myData);
    });
}
