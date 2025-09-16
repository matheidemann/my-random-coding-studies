'use strict';

//FORMAS DE DECLARAS OBJETOS

//Forma formal
let person1 = new Object;
person1.name = "Matheus";
person1.age = 22;
person1.status = true;
person1.arr = ['magro', 1.75];
person1.study = function () {
    console.log('Estudando');
}

console.log(`${person1.name} ${person1.age} ${person1.status}`);

//Forma literal
let person2 = {
    name: 'Ingrid',
    age: 18,
    status: false,
    arr: ['magra', 1.63],
    work: function () {
        console.log('Trabalhando');
    },
    support: person1,
}

person2.support.study();


//É POSSÍVEL COLOCAR OBJETOS DENTRO DE OBJETOS

//Objeto pessoa
let pessoa = {
    nome: 'Matheus',
    idade: 22,
    conta: '123'
};

//Objeto operação
let operacao = {
    sacar: function (saldo, dinheiro) {
        return saldo -= dinheiro;
    },
    depositar: function (saldo, dinheiro) {
        return saldo += dinheiro;
    }
}

//Objeto banco
let banco = {
    pessoa: pessoa,
    operacao: operacao,
    saldo: 100
}

//Valor utilizado
let valor = 30;

//Código de execução
console.log(
    banco.pessoa.nome +
    ' portador da conta ' +
    banco.pessoa.conta +
    ' fez um saque de ' +
    valor +
    ' ficando com ' +
    banco.operacao.sacar(banco.saldo, valor));

