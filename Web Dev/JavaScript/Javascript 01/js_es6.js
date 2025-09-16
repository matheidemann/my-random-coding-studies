// TEMPLATE STRINGS
let my_name = "Matheus";
let hobbies = ["Capybara", "Otter", "Beaver"];
const string1 = `Hello my name is ${my_name}`;

console.log(string1);

const box = document.querySelector(".box");
box.innerHTML = `
<h2>Hello my name is ${my_name}</h2>
<ul>My hobbies are: ${hobbies
    .map((item) => {
        return `<li>${item}</li>`;
    })
    .join("")}</ul>
`;

// TEMPLATE LITERALS HIGHLIGHTS
const author = "Capybaro";
const statement = "Hup Hup";
const quote = highlight`Random stuff ${statement} by ${author}`;

function highlight(text, ...vars) {
    console.log({ text, vars });
    const text_formated = text.map((item, index) => {
        return `${item} <strong>${vars[index] || ""}</strong>`;
    });
    return text_formated.join("");
}

// ARROW FUNCTIONS
const sayHi1 = () => console.log("Hello");
sayHi1();

const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
};

console.log(multiply(4, 5));

const object = () => ({ name: "john", age: 25 });
const person1 = object();
console.log(person1);

const numbers1 = [1, 2, 3, 4, 5, 6];
const bigger_then_3 = numbers1.filter((number) => number > 3);
const bigger_then_2 = numbers1.filter((number, index) => {
    console.log(`Index: ${index}`);
    return number > 2;
});
console.log(bigger_then_3);

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Arrow Function");
});

// arrow function this
// o this da arrow function se refere ao seu escopo em volta dela
// no caso de baixo, o escopo em volta da arrow function é a classe
// que será usada para instanciar um objeto, portanto, o this irá
// pegar corretamente o nome do objeto
class Person2 {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    sayName = () => {
        console.log(`Hello my name is ${this.first_name} ${this.last_name}`);
    };
}

bob = new Person2("Bob", "Sanders");
bob.sayName();

// this vai retornar normalmente o nome e sobrenome da ana
const ana = {
    first_name: "ana",
    last_name: "mary",
    sayName: function () {
        console.log(this);
        console.log(`Hello my name is ${this.first_name} ${this.last_name}`);
    },
};

// this aqui vai retornar o nome e sobrenome como undefined undefined
const billy = {
    first_name: "billy",
    last_name: "the kid",
    sayName: () => {
        console.log(this);
        console.log(`Hello my name is ${this.first_name} ${this.last_name}`);
    },
};

// aqui a arrow function setTimeout vai referenciar ao nome do objeto, pois
// o this na arrow function se refere ao escopo atual, que, neste, caso é
// o escopo que está em volta dele (o escopo do objeto)
const tula = {
    first_name: "tula",
    last_name: "rodo",
    sayName: function () {
        console.log(this);
        setTimeout(() => {
            console.log(`Hello my name is ${this.first_name} ${this.last_name}`);
        }, 0);
    },
};

ana.sayName();
billy.sayName();
tula.sayName();

// default parameters
// parametros padrão caso não tenha sido passado nada pra função
const isabela = "isabela";
function sayHi3(person = "default parameter") {
    console.log(`Hi from ${person}`);
}

const sayHi4 = (person = "default parameter") => console.log(`Hello from ${person}`);

sayHi3();
sayHi3(isabela);
sayHi4();
sayHi4(isabela);

// Array.of
const stuff1 = Array.of("John", 5, true, "Text", "More text");

// Array.from
// cria um array com base em algum objeto array-like
// perceba que o "arguments" é uma keyword para pegar os argumentos passados
// para a função, mesmo que não esteja sendo colocado nada dentro dos ()
const some_text = "uedmy";
console.log(Array.from(some_text));

function countTotal() {
    let total = Array.from(arguments).reduce((acc, curr) => (acc += curr), 0);
    console.log(total);
}

countTotal(10, 20, 30);

// Array.from - DOM
// o NodeList de "li" se torna um array
const box2 = document.querySelector(".box2");
const my_texts = document.querySelectorAll(".sometext");
let new_texts = Array.from(my_texts);
new_texts = new_texts.map((item) => `<span>${item.textContent}</span>`).join(" ");

box2.innerHTML = new_texts;

// find, findIndex, every, some
const people1 = ["john", "billy", "anna"];
const grades = [9, 4, 2, 9, 7];
const good_grades = [10, 9, 8];

console.log(people1.find((person) => person === "billy"));
console.log(people1.findIndex((person) => person === "billy"));
console.log(grades.every((grade) => grade !== 7)); // false
console.log(good_grades.every((grade) => grade !== 7)); // true
console.log(grades.some((grade) => grade === 10)); // false
console.log(good_grades.some((grade) => grade === 10)); // true

// for in loop
// bom para iterar por propriedades de objs, mas não para arrays, uma vez que
// não respeita a ordem
const person3 = {
    first_name: "billy",
    last_name: "the kid",
    age: 24,
};

for (const property_name in person3) {
    console.log(`${property_name} : ${person3[property_name]}`);
}

// object.keys, object.values, object.entries
// métodos para converter objs em arrays
// object.keys = nomes de propriedades para array
const keys = Object.keys(person3);
console.log(keys);
// object.values = valores de propriedades para array
const values = Object.values(person3);
console.log(values);
// object.entries = nomes de propriedades e valores de propriedades para array
const entries = Object.entries(person3);
console.log(entries);

// new Set
// guarda valores únicos
const unique = new Set();
unique.add("first");
unique.add("second");
unique.add("second"); // não será adicionado
unique.add("third");
console.log(unique);
unique.delete("first");
console.log(unique);
console.log(unique.has("second"));
unique.clear();
console.log(unique);

// string.includes
// procura uma substring

const products = [
    { title: "Modern Poster" },
    { title: "Bar Stool" },
    { title: "Armchair" },
    { title: "Leather Chair" },
];

const result1 = products[0].title.includes("Le");
console.log("Includes");
console.log(result1);

const filtered_products = products.filter((product) => product.title.toLowerCase().includes("le"));

console.log("Filtered products");
console.log(filtered_products);

// array.includes
const groceries = ["milk", "bread", "meat"];
console.log("Array.includes");
console.log(groceries.includes("bread"));
