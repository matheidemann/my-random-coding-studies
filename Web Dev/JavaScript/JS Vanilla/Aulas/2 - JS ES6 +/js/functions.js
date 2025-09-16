//TEMPLATE LITERALS
{
    let word1 = 'Matheus';
    let word2 = 'Heidemann';

    //OLD WAY
    const fullNameOld = word1 + ' ' + word2;
    console.log(fullNameOld);

    //ES6+ WAY - RESPECT SPACES AND LINE BREAKS
    const fullNameNew = `${word1} ${word2}`;
    console.log(fullNameNew);
}

//DESTRUCTURING OBJECTS - GIVES THE OPTION TO WRITE SHORTHAND CODE AND REASIGN VALUES
{
    //MAIN OBJECT
    const personalInformation = {
        firstName: 'Matheus',
        lastName: 'Heidemann',
        age: 22,
        city: 'São Paulo',
        state: 'São Paulo'
    };

    //DESTRUCTURING
    const { firstName: fn, lastName: ln } = personalInformation;
    const { city, state } = personalInformation;

    console.log(`${fn} ${ln} ${city} ${state}`);
};

//DESTRUCTURING ARRAYS - GIVES THE OPTION TO CREATE INDEXES WITH CUSTOM NAMES
{
    //OLD WAY
    let namesOld = ['Matheus', 'O Pica Das Galáxias', 'Heidemann'];
    console.log(namesOld[0] + ' ' + namesOld[1] + ' ' + namesOld[2]);

    //ES6+ WAY
    let [firstName, middleName, lastName] = ['Matheus', 'O Pica Das Galáxias', 'Heidemann'];
    middleName = 'O Maravilhoso';
    console.log(`${firstName} ${middleName} ${lastName}`);
    console.log(middleName);
};

//OBJECT LITERAL - GIVES THE OPTION TO WRITE LESS CODE WHEN THE PARAMETER AND THE VARIABLE HAS THE SAME NAME
{
    function adressCreator(city, state) {
        const fullAdress = { city, state };
        console.log(fullAdress);
    }

    adressCreator('São Mateus', 'São Paulo');
}


//CHALLENGE
//OLD WAY
{
    function adressMaker(adress) {
        const newAdress = {
            city: adress.city,
            state: adress.state,
            country: 'Brazil'
        };
        console.log('Old Way: ' + newAdress.city + ', ' + newAdress.state + ', ' + newAdress.country + '.');
    }
    adressMaker({ city: 'São Mateus', state: 'São Paulo' })
}

//ES6+ WAY
{
    function adressMaker(adress) {
        const { city, state } = adress;
        const newAdress = {
            city,
            state,
            country: 'Brazil'
        };
        console.log(`ES6: ${newAdress.city}, ${newAdress.state}, ${newAdress.country}.`);
    }
    adressMaker({ city: 'São Mateus', state: 'São Paulo' })
}

//FOR OF LOOP - DESIGNED TO ITERATE OVER ITERABLES, NOT ACTUALLY USED TO SET UP NEW VALUES OR UPDATE THE VALUES OF ITERABLE OBJECTS - EVERYTHING THAT IS ITERABLE YOU CAN USE FOR OF LOOP
{
    //EXAMPLE 1
    let names = ['Matheus', 'Ingrid', 'Clara'];

    for (const name of names) {
        console.log(name);
    }

    //EXAMPLE 2
    let numbers = [100, 50, 1];
    let total = 0;

    for (const number of numbers) {
        total += number;
    }
    console.log(total);

    //EXAMPLE 3
    let myName = 'Bob Zika';

    for (const char of myName) {
        console.log(char);
    }

    //EXAMPLE 4 - THIS IS NOT HOW FOR OF WAS DESIGNED TO USE
    let numbers2 = [100, 50, 1];

    for (number of numbers2) {
        number += 1000;
    }
    console.log(numbers2); //THE VALUES STOOD THE SAME
}

//SPREAD OPERATOR
{
    //EXAMPLE 1 - IN ARRAYS IT CAN ALLOW US TO INSERT NEW VALUES
    let colors1 = ['Red', 'Green'];
    let colors2 = ['Blue', 'Violet', 'Yellow'];
    let finalColors1 = [...colors1, ...colors2];

    console.log(finalColors1);

    //WITHOUT THE SPREAD OPERATOR
    let colors3 = ['Red', 'Green'];
    let finalColors2 = colors3;

    finalColors2.push('Blue', 'Violet', 'Yellow');

    console.log(finalColors2);

    //EXAMPLE 2 - IN STRINGS, IT CAN SPREAD EACH LETTER IN A PHRASE IN A INDIVIDUAL CHARACTER
    let str = ['A', ...'EIO', 'U'];
    console.log(str);
}

//REST OPERATOR - GIVES THE OPTION TO PASS MULTIPLE VALEUS AS PARAMETERS WITHOUT USING AN ARRAY
{
    //OLD WAY - ARGUMENTS WILL RETURN AN OBJECT
    function add1(numbers) {
        console.log(arguments);
    }
    add1(10, 18, 25, 30);

    //ES5+ WAY - THE REST OPERATOR MAKES IT RETURN AN ARRAY INSTED OF AN OBJECT
    //EXAMPLE 1
    function add2(...numbers) {
        console.log(numbers);
    }
    add2(10, 18, 25, 30);

    //EXAMPLE 2
    function multiply(multiplier, ...numbers) {
        return numbers.map(function (item) {         //ESTE RETURN ESTÁ RETORNANDO O ARRAY FINAL PARA A CONST "FINALRESULT"
            return multiplier * item;                //ESTE RETURN ESTÁ RETORNANDO O ITEM MULTIPLICADO PARA O NOVO ARRAY QUE FARÁ PARTE DO FINAL RESULT
        })                                           //POR ISSO É NECESSÁRIO DOIS RETURN, UM PARA O FINALRESULT, OUTRO PARA A FUNÇÃO MAP
    }
    const finalResult = multiply(2, 5, 10, 20);
    console.log(finalResult);
}

//ARROW FUNCTIONS - MAKES YOU WRITE LESS CODE AND TREATS 'THIS' IN A DIFFERENT WAY
{
    //WRITING LESS CODE & SYNTAX ---------------------------------------------------------------------------------------
    //OLD WAY
    function add1(...nums) {
        let finalArr = nums.reduce(function (value1, value2) {
            return value1 + value2;
        })
        console.log(finalArr);
    }
    add1(1, 2, 3, 4, 5);

    //ES6+ WAY - FOR NON-ANONIMOUS FUNCTIONS
    function add2(...nums) {
        let finalArr = nums.reduce((value1, value2) => value1 + value2);
        console.log(finalArr);
    }
    add2(1, 2, 3, 4, 5);

    //EXAMPLE 2
    //OLD WAY
    //NAMED FUNCTION WITH MULTIPLE PARAMETERS
    function addNumbers(value1, value2) {
        return value1 + value2;
    }

    //NAMED FUNCTION WITH ONE PARAMETER
    function isPositive(number) {
        return number >= 0;
    }

    //NAMED FUNCTION WITHOUT PARAMETERS
    function randomNumber(number) {
        return Math.random;
    }

    //CALLBACK FUNCTION
    document.addEventListener('DOMContentLoaded', function () {
        console.log('Hello!');
    })

    //ES6+ WAY
    //NAMED FUNCTION WITH MULTIPLE PARAMETERS
    let addNumbersArrow = (value1, value2) => value1 + value2;

    //NAMED FUNCTION WITH ONE PARAMETER
    let isPositiveArrow = number => number >= 0;

    //NAMED FUNCTION WITHOUT PARAMETERS
    let randomNumberArrow = () => Math.random;

    //CALLBACK FUNCTION
    document.addEventListener('DOMContentLoaded', () => console.log('Hello!'));

    //TREATING 'THIS' IN A DIFFERENT WAY ---------------------------------------------------------------------------------------
    //CLASS AND CONSTRUCTOR FOR NAMING SOMETHNG
    class Person {
        constructor(name) {
            this.name = name;
        }

        printNameFunction() {
            setTimeout(function () {
                console.log('Function: ' + this.name);    //this = scope where the function was called (global scope in this case)
            }, 0);
        }

        printNameArrow() {
            setTimeout(() => {
                console.log('Arrow: ' + this.name)      //this = scope where the function in defined
            }, 0);
        }
    }

    let person = new Person('Matheus');
    person.printNameFunction();                 //NORMAL FUNCTIONS USE THE SCOPE OF THIS FROM WHERE THE FUNCTION IS CALLED
    person.printNameArrow();                    //ARROW FUNCTIONS USE THE SCOPE OF THIS FROM WHERE THE FUNCTION IN DEFINED
}

//DEFAULT PARAMETERS - ALLOWS NAMED PARAMETERS TO BE INITIALIZED WITH DEFAULT VALUES IF NO VALUE OR UNDEFINED IS PASSED
{
    let addNumbers = (numberArr = []) => {
        let total = 0;
        numberArr.forEach((element) => {
            total += element;
        });
        console.log('Default parameter: ' + total);
    };

    addNumbers([1, 2]);
}

//INCLUES - RETURN A BOOL VALUE IF A VALUE EXISTS OR NOT IN THE ARRAY 
{
    const numberArr = [1, 2, 3, 4, 5];

    console.log(numberArr.includes(3));
    console.log(numberArr.includes(6));
}

//EXPORT && IMPORT
{
    // import { data } from './data.js';
    // let updatedData = data;

    // updatedData.push(4);
    // console.log(updatedData);
}

//PADSTART() && PADEND() - ADDS VALUES IN THE START OR END OF A VALUE (IT WILL ALWAYS NEW CHARACTERS, EVEN IF THE FUNCTION PARAMETER IS EMPTY)
{
    let name = 'Matheus';
    console.log(name.padStart(20, 'Drako'));
    console.log(name.padEnd(20, 'Drako'));
    console.log(name.padEnd(100).length);
}

//CLASSES
//SEE ANOTHER VIDEO!!!!

//ASYNC && AWAIT
//SEE ANOTHER VIDEO!!!!

//SETS - ONLY HAS UNIQUE VALUES
{
    let exampleSet = new Set([1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);

    exampleSet.add(1);
    exampleSet.add(1);
    exampleSet.add(1);
    exampleSet.add(4);
    console.log(exampleSet.delete(5));              //RETURN BOOL VALUE 
    console.log('Set size: ' + exampleSet.size);    //THE SIZE ONLY COUNTS UNIQUE VALUES (THE REPEATED VALUES DOESN'T EXIST AT ALL)
}