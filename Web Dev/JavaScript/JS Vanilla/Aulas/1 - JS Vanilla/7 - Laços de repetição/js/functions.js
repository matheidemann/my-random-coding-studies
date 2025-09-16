'use strict';

//LAÇOS DE REPETIÇÃO

//For
for (let index = 0; index < 10; index++) {
    console.log(index);
}

//While

let ind = 0;
let numbers = '';

while (ind < 10) {
    numbers += ind++;

    if (ind != 10) {
        numbers += ' - ';
    }
}

console.log(numbers);

//Do while
let inde = 0;

do {
    console.log(inde++);
} while (inde < 10);

//For In

let pessoa = {
    nome: 'Matheus',
    idade: '22',
    sexo: 'Masculino'
}

let key = 0

for (key in pessoa) {
    console.log(pessoa[key]);
}

console.log(pessoa.idade);