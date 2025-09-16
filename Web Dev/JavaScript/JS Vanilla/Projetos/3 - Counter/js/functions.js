(function ReadyJS(win, doc) {
    let counter = 0;
    const value = doc.querySelector('#value');
    const btns = doc.querySelectorAll('.btn');

    //CHECA  VALOR DO NÚMERO PARA APLICAR UMA COR
    function checkColor() {
        if (counter > 0) {
            return value.style.color = '#05fc09';
        }
        else if (counter < 0) {
            return value.style.color = 'red';
        }
        else {
            return value.style.color = 'white';
        }
    }

    //EVENTO

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const btnType = e.currentTarget.classList;
            if (btnType.contains('decrease')) {
                counter--;
                checkColor();
                return value.textContent = counter;
            }
            else if (btnType.contains('increase')) {
                counter++
                checkColor();
                return value.textContent = counter;
            }
            else {
                counter = 0;
                checkColor();
                return value.textContent = counter;
            }
        }, false)
    })

})(window, document);