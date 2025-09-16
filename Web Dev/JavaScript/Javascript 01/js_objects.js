// Objects basics
const age = 25;

const person = {
    name: "John",
    age: age,
    married: true,
    siblings: ["Anna", "Peter"],
    delete_this: "Koringa",
    greet: function (name) {
        console.log(`Hello my name is ${name}`);
    },
    sayHello(name) {
        console.log(`Hello my name is ${name}`);
    },
    job: {
        title: "dev",
        position: "senior",
        company: {
            name: "Capy Company",
            address: "123 Main Street",
        },
    },
    "random-value": "random",
};

// prints properties
console.log(person);
console.log(person.name);
console.log(person["name"]);
person.age = 60;
console.log(person.age);
console.log(person.job.company.name);
console.log(person["random-value"]);
console.log(person.delete_this);

// delete property
delete person.delete_this;
console.log(person.delete_this);

// this keyword
const john = {
    first_name: "John",
    last_name: "Anderson",
    fullName: function () {
        console.log(`My Full name is ${this.first_name} ${this.last_name}.`);
    },
};

// quando usamos o this em funções normais, ele sempre irá se referir aquilo que está
// do lado esquerdo dela "obj1.showThis" <- o this se refere ao obj1
function showThis() {
    console.log(this);
}

const obj1 = {
    name: "obj1",
    showThis: showThis,
};
const obj2 = {
    name: "obj2",
    showThis: showThis,
};

// mostra o obj1
obj1.showThis();
// mostra o obj2
obj2.showThis();
// mostra o obj window
showThis();

// porém ela muda conforma como você chama ela no DOM
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// aponta para o btn2
btn2.addEventListener("click", showThis);

// aponta para o window
btn3.addEventListener("click", function () {
    showThis();
});

// FACTORY AND CONSTRUCTOR FUNCTIONS
// factory function
function createPerson(first_name, last_name) {
    return {
        first_name: first_name,
        last_name: last_name,
        fullName: function () {
            console.log(`My full name is: ${this.first_name} ${this.last_name}`);
        },
    };
}

const maria = createPerson("maria", "sanders");
const bob = createPerson("bob", "billy");
bob.fullName();
maria.fullName();

// constructor function
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

// new = cria um novo objeto, aponta para ele, omite o return
const michael = new Person("Michael", "De Santa");
console.log(michael.constructor);
const susy = new michael.constructor("susy", "block");
console.log(susy);

// arrays e funçõe são objetos em JS, portanto, possuem um constructor
function sayHi() {
    console.log("Hi");
}
const some_list = [];

console.log(sayHi.constructor);
console.log(some_list.constructor);

// prototype inheritance model
// pra que colocar o nome do banco e a função de depósito em cada objeto,
// se sempre serão padrão independente da instância? pra isso a gente usa
// o propetype
function Account(name, initial_balance) {
    this.name = name;
    this.balance = initial_balance;
}

Account.prototype.bank = "SANTANDER";
Account.prototype.deposit = function (amount_value) {
    this.balance += amount_value;
    console.log(`Your balance is R$${this.balance}`);
};

const billy = new Account("billy", 200);
billy.deposit(300);
console.log(billy);

// ES6 Classes
class AccountES6 {
    constructor(name, initial_balance) {
        this.name = name;
        this.balance = initial_balance;
    }
    // as funções ficam como prototype
    deposit(amount_value) {
        this.balance += amount_value;
        console.log(`ES6 - Your balance is ${this.balance}`);
    }
    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
    // as propriedades não
    bank = "Santander";
}

const tony = new AccountES6("tony", 50000);
console.log(tony);
tony.deposit(1000);

// call / apply / bind
function sayHi2(country) {
    console.log(this);
    console.log(`Hello my name is ${this.name} and I am from ${country}`);
}
// passa um objeto como argumento, sendo que ele precisa ter o nome da
// propriedade especificade na função (name)
sayHi2.call(tony, "US");
tony.sayHello.call(billy);
sayHi2.apply(billy, ["UK"]);
const tonyHello = sayHi2.bind(tony, "US");
tonyHello();

// example
const counter = {
    count: 0,
    increment() {
        console.log(this);
        this.count++;
        console.log(this.count);
    },
};

const btn = document.querySelector("#btn3");
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
