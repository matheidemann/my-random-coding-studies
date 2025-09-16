// JAVASCRIPT BASICS
//
//
//
//
//
function run(option) {
    if (option == 1) {
        // VARIABLES
        // LET
        // - Tem escopo de bloco. Isso significa que a variável declarada com `let` é visível apenas dentro do bloco do qual foi declarada e os blocos filhos;
        // - É hoisted, mas não é inicializado até a linha em que é declarado. Tentar usar uma variável `let` antes de sua declaração resultará em um erro de referência;
        // - Não permite reatribuição. Isso significa que uma vez que uma variável foi declarada com a keyword `let`, não será possível declrar a variável com o mesmo nome e com a keyword `let` novamente.
        let value1 = 20;
        console.log("let " + value1);

        // VAR
        // - Tem escopo de função ou escopo global. Isso significa que a variável declarada com `var` é visível em toda a função em que foi declarada ou globalmente se estiver fora de qualquer função;
        // - É hoisted para o topo do seu contexto de execução. Isso significa que você pode usar a variável mesmo antes de ela ser declarada no código, mas seu valor inicial será `undefined`.
        // - Permite reatribuição. Isso significa que você pode declarar uma variável com a keyword `var`, e em seguida pode declarar a variável com o mesmo nome e com a keyword `var` novamente.
        var value2 = 20;
        console.log("var " + value2);

        // CONST
        // Compartilha dos mesmos pontos do let, exceto a atribuição, uma vez que o valor nunca é modificado.
        const value3 = 20;
        console.log("const " + value3);
        //
        //
        //
        //
        //
    } else if (option == 2) {
        // DATA TYPES
        // Existem vários tipos diferentes de data types no Javascript. Não é necessário definir o data type para cada variável declarada, uma vez que o Javascript é de tipagem dinâmica. São os data types:
        // Primitivos
        // String
        let my_string = "Bob";
        // Number
        let my_value = 10;
        // Boolean
        let my_bool = true;
        // Null
        let null_value = null;
        // Undefined
        let undefined_value = undefined;
        // Symbol
        let my_symbol = Symbol("descrição");
        // Objetos
        // Object
        let my_object = { chave: "valor" };
        // Array
        let my_array = [1, 2, 3, 4, 5];
        // Function
        function my_func(a, b) {
            return a + b;
        }
        // Date
        let my_date = new Date();
        // RegExp
        let my_regex = /abc/;
        // Valores especiais
        // NaN (Not a Number)
        let my_nan = NaN;
        // Infinity
        let my_positive_infinity = Infinity;
        // -Infinity
        let my_negative_infinity = -Infinity;
        // Estruturas de dados
        // Map
        let my_map = new Map();
        // Set
        let my_set = new Set();
        // WeakMap
        let my_weak_map = new WeakMap();
        // WeakSet
        let my_weak_set = new WeakSet();
        //
        //
        //
        //
        //
    } else if (option == 3) {
        // ARRAYS
        let people = ["Person 1", "Person 2", "Person 3"];
        people[1] = "New Person 2";
        console.log(people[2]);
        //
        //
        //
        //
        //
    } else if (option == 4) {
        // FUNCTIONS (PRE ES6)
        // Declarando
        function helloWorld(param1, param2) {
            console.log("Hello World! " + param1 + " " + param2);
        }

        // Invocando
        helloWorld("arg1", "arg2");
        //
        //
        //
        //
        //
    } else if (option == 5) {
        // OBJETOS
        // Criando
        const Person = {
            first_name: "Billy",
            last_name: "Bob",
            age: 40,
            married: false,
            parents: ["Mary Bob", "Joe Bob"],
            greeting: function () {
                console.log("Hello from Billy Bob!");
            },
        };

        // Usando
        console.log(Person.name);
        console.log(Person.parents[2]);
        Person.greeting();
        Person.name = "New Name*";
        //
        //
        //
        //
        //
    } else if (option == 6) {
        // CONDIITONAL STATEMENTS
        // if else if else
        let value1 = 5;

        if (value1 > 0) {
            console.log("The value is positive.");
        } else if (value1 == 0) {
            console.log("The value is zero.");
        } else {
            console.log("The value is negative.");
        }

        // É possível usar o not
        if (!value1) {
            console.log("No value is present");
        }
        //
        //
        //
        //
        //
    } else if (option == 7) {
        // COMPARISON OPERATORS
        let value1 = 5;
        let value2 = 6;

        // ==
        console.log("== " + value2 == value2);
        // !=
        console.log("!= " + value2 != value2);
        // ===
        console.log("=== " + value2 === value2);
        // !==
        console.log("!== " + value2 !== value2);
        // >
        console.log("> " + value2 > value2);
        // >=
        console.log(">= " + value2 >= value2);
        // <
        console.log("< " + value2 < value2);
        // <=
        console.log("<= " + value2 <= value2);
        //
        //
        //
        //
        //
    } else if (option == 8) {
        // LOGICAL OPERATORS
        let value1 = 10;

        // ||
        if (value1 == "10" || value1 == "11") {
            console.log("Value is 10 or 11");
        }

        // &&
        if (value1 == "10" && value1 > "0") {
            console.log("Value is 10 and positive");
        }
        //
        //
        //
        //
        //
    } else if (option == 9) {
        // SWITCH STATEMENT
        let value1 = 2;

        switch (value1) {
            case 1:
                console.log("Option 1");
                break;
            case 2:
                console.log("Option 2");
                break;
            default:
                console.log("Default Option");
        }
        //
        //
        //
        //
        //
    } else if (option == 10) {
        // WHILE LOOP - Não acontece o código caso não bata na condição
        let index = 5;

        while (index > 0) {
            console.log(index);
            index--;
        }
        //
        //
        //
        //
        //
    } else if (option == 11) {
        // DO WHILE LOOP - Acontece o código pelo menos uma vez
        let index = 5;

        do {
            console.log(index);
            index--;
        } while (index > 0);
        //
        //
        //
        //
        //
    } else if (option == 12) {
        // FOR LOOP - Não acontece o código caso não bata na condição
        for (let index = 5; index > 0; index--) {
            console.log(index);
        }
    } else if (option == 13) {
        // TEMPLATE LITERALS
        const name = "Billy Bob";
        const age = 18;

        console.log(`My name is ${name} and I'm ${age}.`);
        //
        //
        //
        //
        //
    } else if (option == 14) {
        // STRING PROPERTIES AND METHODS
        let my_string = "Hello";

        console.log(my_string.length);
        console.log(my_string.toLocaleLowerCase());
        console.log(my_string.toUpperCase());
        console.log(my_string.charAt(0));
        console.log(my_string.charAt(my_string.length - 1));
        console.log(my_string.indexOf("e"));
        console.log(my_string.trim());
        console.log(my_string.includes("llo"));
        console.log(my_string.slice(0, 2));
        //
        //
        //
        //
        //
    } else if (option == 15) {
        // ARRAY PROPERTIES AND METHODS
        let first_names = ["Billy", "Leon", "Ada", "Ashley"];
        let last_names = ["Bob", "Keneddy", "Wong", "Graham"];
        let allNames = [];

        // length
        console.log(first_names.length);
        console.log(first_names[first_names.length - 1]);

        // concact
        console.log((allNames = first_names.concat(last_names)));

        // reverse
        console.log(allNames.reverse());

        // adicionar novo valor no começo do array
        allNames.unshift("Ana");
        console.log(allNames);

        // adicionar novo valor no final do array
        allNames.push("Susy");
        console.log(allNames);

        // remover primeiro valor array
        allNames.shift();
        console.log(allNames);

        // remover o último valor do array
        allNames.pop();
        console.log(allNames);

        // pegar só uma parte do array (index, quantidade)
        console.log(allNames.splice(2, 2));
        //
        //
        //
        //
        //
    } else if (option == 16) {
        // TERNARY OPERATOR
        let value1 = true;

        value1 ? console.log("true") : console.log("false");
        //
        //
        //
        //
        //
        //
    } else if (option == 17) {
        // HIGH ORDER / CALLBACK FUNCTION

        // callback function = é passada para outra função como um argumento e é executada dentro daquela função
        function hello(name) {
            return `Hello ${name}`;
        }

        // high order function = aceita outra função como u margumento ou retorna outra função como um resultado
        function greet(your_name, my_callback_func) {
            const my_name = "John";
            console.log(`${my_callback_func(your_name)}, my name is ${my_name}`);
        }

        greet("Bob", hello);
        //
        //
        //
        //
        //
    } else if (option == 18) {
        const people = [
            { name: "bob", age: 20, position: "developer", salary: 1000 },
            { name: "maria", age: 18, position: "designer", salary: 2000 },
            { name: "susan", age: 27, position: "sales", salary: 3000 },
        ];

        // ARRAY ITERATOR METHODS
        // - forEach, map, filter, find, reduce
        // - aceitam callback func como argumento, e chamam o callback para cada item no array
        //
        // FOREACH - itera com cada item de um array, não retorna um novo array
        function showPersonPosition(person) {
            console.log(person.position.toUpperCase());
        }

        people.forEach(showPersonPosition);
        people.forEach(function (person) {
            console.log(person.name.toUpperCase());
        });

        // MAP - itera em cada item de um array e faz algo, retorna um novo array
        const ages = people.map(function (person) {
            return person.age;
        });
        console.log(ages);

        // FILTER - itera em cada item de um array e retorna os itens com base em uma condição, retorna um novo array
        const young_people = people.filter(function (person) {
            return person.age <= 20;
        });
        console.log(young_people);

        // FIND - retorna a primeira ocorrência do q vc ta procurando, e se n tiver nada retorna undefined
        const susan = people.find(function (person) {
            return person.name.toLocaleUpperCase() == "SUSAN";
        });
        console.log(susan);
        console.log("asd");
        // REDUCE - itera em cada item do array e reduz o item para um único valor. o 1st valor será o accumulator (total de cálculos) e o 2nd será o current (quantidade de iterações/valores)
        const totalPeopleSalary = people.reduce(function (accumulator, current_item) {
            console.log(`total: ${accumulator}`);
            console.log(`current money: ${current_item.salary}`);
            accumulator += current_item.salary;
            return accumulator;
        }, 0);

        console.log(totalPeopleSalary);
        //
        //
        //
        //
        //
    } else if (option == 19) {
        // MATH OBJECT
        const number = 4.56789;
        console.log(Math.floor(number));
        console.log(Math.ceil(number));
        console.log(Math.sqrt(number));
        console.log(Math.min(4, 5, 6, 7, 8));
        console.log(Math.max(4, 5, 6, 7, 8));
        console.log(Math.floor(Math.random() * 100));
        //
        //
        //
        //
        //
    } else if (option == 20) {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        // DATE OBJECT
        const my_date = new Date();
        console.log(my_date);

        const day = my_date.getDay();
        const month = my_date.getMonth();
        const year = my_date.getFullYear();

        const sentence = `${day} - ${months[month]} - ${year}`;
        console.log(sentence);
        //
        //
        //
        //
        //
    } else if (option == 21) {
        // IIFE - Immediately Invoked Function Expression
        (function () {
            const num1 = 30;
            const num2 = 30;
            console.log(`Result: ${num1 + num2}`);
        })();

        const result = (function (value1, value2) {
            return value1 + value2;
        })(10, 30);
        console.log(result);
        //
        //
        //
        //
        //
    } else if (option == 22) {
        // CLOSURE - não da pra acessar as variáveis dentro da outer function
        // a gente não consegue modificar a variável "balance" neste exemlplo
        function newAccount(name, initial_balance) {
            let balance = initial_balance;
            function showBalance() {
                console.log(`Hello ${name}, your balance is R$${balance}`);
            }
            function deposit(amount) {
                console.log(`Hello ${name}. You deposited R$${amount}`);
                balance += amount;
                showBalance();
            }
            function withdraw(amount) {
                if (amount > balance) {
                    console.log(`Hello ${name}. You don't have R$${amount} to withdraw`);
                    showBalance();
                    return;
                }
                console.log(`Hello ${name}. You withdrawn R$${amount}`);
                balance -= amount;
                showBalance();
            }
            return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
        }

        const john = newAccount("john", 300);
        john.showBalance();
        john.deposit(500);
        john.withdraw(100);
        john.withdraw(900);
    }
}

run(22);
