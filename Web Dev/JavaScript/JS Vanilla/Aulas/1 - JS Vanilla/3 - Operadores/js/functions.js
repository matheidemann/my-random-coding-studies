'use strict';

function title(text) {
    console.log(text);
}


//OPERADORES ARITIMÉTICOS

let number1 = 10;
let number2 = 6;
let number3 = '10';
let string1 = 'Eu sou a string1';

//Adição com números
title('Adição com números');
console.log(number1 + number2);

//Adição com strings
title('Adição com strings');
console.log(number1 + string1);

//Subtração
title('Subtração');
console.log(number1 - number2);

//Multiplicação
title('Multiplicação');
console.log(number1 * number2);

//Divisão
title('Divisão');
console.log(number1 / number2);

//Módulo (resto da divisão)
title('Módulo');
console.log(number1 % number2);



//OPERADORES DE IGUALDADE

//Igual a
title('Igual a');
console.log(number1 == number3);

//Identico a
title('Identico a');
console.log(number1 === number3);

//Diferente de
title('Diferente de');
console.log(number1 != number3);

//Totalmente diferente de
title('Totalmente diferente de');
console.log(number1 !== number3);

//Maior que
title('Maior que');
console.log(number1 > number2);

//Maior ou igual a
title('Maior ou igual a');
console.log(number1 >= number2);

//Menor que
title('Menor que');
console.log(number1 < number2);

//Menor ou igual a
title('Menor ou igual a');
console.log(number1 <= number2);



//OPERADORES LÓGICOS

//&& - E também
title('&& - E também');
console.log(number1 < number2 && number1 == number3);

//|| - Ou então
title('|| - Ou então');
console.log(number1 < number2 || number1 == number3);