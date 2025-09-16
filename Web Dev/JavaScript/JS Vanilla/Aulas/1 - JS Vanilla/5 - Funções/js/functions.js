'use strict';

//FUNÇÕES

//1a forma de declarar funções - forma direta
function AddNumbers(value1, value2) {
    let result = value1 + value2;
    return result;
}

console.log(AddNumbers(10, 5));


//2a forma de declarar funções - atribuindo a uma variável
let SubtractNumbers = function (value1, value2) {
    let result = value1 - value2;
    return result;
}

console.log(SubtractNumbers(10, 5));


//3a forma de declarar funções - dentro de um objeto
let myObj = {
    myFunction: function MultiplyNumbers(value1, value2) {
        let result = value1 * value2;
        return result;
    }
}

console.log(myObj.myFunction(10, 5));


//4a forma de declarar funções - aninhadas
let UserName = function (value1) {

    let name1;
    let SetName = function () {
        if (value1 == 0) {         //PARAMETROS DO PARENT SÃO ACESSÍVEIS NA FUNÇÃO CHILD
            name1 = 'Matheus';
            return name1;
        }
        else if (value1 == 1) {
            name1 = 'Ingrid';
            return name1;
        }
        else {
            name1 = 'Valor desconhecido';
            return name1;
        }
    }
    return SetName();
}

console.log(UserName(1));


//5a forma de declarar funções - arrow functions
let DivideNumbers1 = (value1, value2) => {
    return value1 / value2;
}

console.log(DivideNumbers1(10, 5));


//6a forma de declarar funções - arrow functions simplificadas
let DivideNumbers2 = (value1, value2) => value1 / value2;

console.log(DivideNumbers2(10, 5));

