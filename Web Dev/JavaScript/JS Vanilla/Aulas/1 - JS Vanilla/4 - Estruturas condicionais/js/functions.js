'use strict';

function title(text) {
    console.log(text);
}



//ESTRUTURAS CONDICIONAIS

let number1 = 10;
let number2 = 6;
let number3 = '10';
let year = '2021';
let string1 = 'Eu sou a string1';

//If elseif else
if (number1 > number2) {
    console.log(number1 + ' é maior que ' + number2);
}
else if (number1 < number2) {
    console.log(number1 + ' é menor que ' + number2);
}
else {
    console.log('Erro');
}

//Operador ternário
(number > number2) ? console.log(number1 + ' é maior que ' + number2) : console.log(number1 < ' é menor que ' + number2);

//Switch
switch (year) {
    case 2021:
        console.log('Ano de 2021');
        break;

    case 2020:
        console.log('Ano de 2020');
        break;

    default:
        console.log('Algum outro ano');
        break;
}

