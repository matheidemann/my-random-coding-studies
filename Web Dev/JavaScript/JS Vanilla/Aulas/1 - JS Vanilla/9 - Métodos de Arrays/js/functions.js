'use strict';

//CONCAT

{
	console.log('CONCAT');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = [];

	//Método de concatenação - coloca um array dentro do outro, um seguido do outro
	console.log(arr1.concat(arr2));
}

//EVERY

{
	console.log('EVERY');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método every - passa por todos os elementos do array (mas não de forma individual)
	console.log(
		finalArray.every(function VerifyElements(elem, ind, obj) {
			return typeof elem == 'number'; //IRÁ VERIFICAR SE TODOS MEUS ELEMENTOS DO ARRAY SÃO DO TIPO NUMBER
		})
	);
}

//FILTER

{
	console.log('FILTER');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método filter - filtra os valores que eu quero encontrar
	console.log(
		finalArray.filter(function VerifyElements(elem, ind, obj) {
			return elem > 3; //IRÁ FILTRAR OS ELEMENTOS MAIORES DO QUE O NUMERO 3
		})
	);

	console.log(
		finalArray.filter(function VerifyElements(elem, ind, obj) {
			return typeof elem == 'string'; //IRÁ FILTRAR OS ELEMENTOS QUE SEJAM STRING
		})
	);
}

//FOREACH

{
	console.log('FOREACH');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);
	let data = '';

	//Método forEach - passa por todos os elementos do array, de forma individual
	finalArray.forEach(function VerifyElements(elem, ind, obj) {
		if (typeof elem == 'number') {
			data += 'NÚMERO - Indice ' + ind + ' : ' + elem + '\n';
		} else if (typeof elem == 'string') {
			data += 'STRING - Indice ' + ind + ' : ' + elem + '\n';
		} else {
			data += 'OUTRO - Indice ' + ind + ' : ' + elem + '\n';
		}
	});

	console.log(data);
}

//INDEXOF
{
	console.log('INDEX');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método indexOf - pega o primeiro indice de algum valor
	console.log(finalArray.indexOf('s'));
}

//LASTINDEXOF
{
	console.log('LASTINDEXOF');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método indexOf - pega o último indice de algum valor
	console.log(finalArray.lastIndexOf('s'));
}

//PS: nos indeOf, caso o valor não exista, será retornado "-1"

//JOIN

{
	console.log('JOIN');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método join - transforma todo o array em uma string. Aceita um parametro para colocar algo entre os itens.
	console.log(finalArray.join(' - '));
}

//PUSH

{
	console.log('PUSH');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método push - Adiciona um novo elemento ao fim do meu array
	finalArray.push('AAAAAAAAAAAAAAAAAAAAAAA');
	console.log(finalArray);
}

//POP

{
	console.log('POP');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método pop - Remove último elemento do meu array
	finalArray.pop();
	console.log(finalArray);
}

//MAP

{
	console.log('MAP');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);
	let mapFinal = [];

	//Método map - monta um novo array
	finalArray.map(function VerifyElements(elem) { //O NOME VERIFYELEMENTS É OPCIONAL
		if (typeof elem == 'number') {
			mapFinal.push(elem * 2); //O PUSH ADICIONA UM NOVO VALOR À UM ARRAY;
		} else {
			mapFinal.push(elem);
		}
	});
	console.log(mapFinal);
}

//SOME

{
	console.log('SOME');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método some - Perceorre o array e procura se há algum valor, retornando true ou false
	console.log(
		finalArray.some(function VerifyElements(elem, ind, obj) {
			return elem == 3; //IRÁ FILTRAR OS ELEMENTOS QUE SEJAM STRING
		})
	);
}

//REVERSE

{
	console.log('REVERSE');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método reverse - Reverte a ordem do array
	console.log(finalArray.reverse());
}

//REDUCE

{
	console.log('REDUCE');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método reduce - Perceorre todos os elementos do array, permitindo fazer operçaões com os elementos
	console.log(
		finalArray.reduce(function VerifyElements(valor1, valor2, ind, arr) {
			return valor1 + valor2;
		})
	);
}

//REDUCERIGHT

{
	console.log('REDUCERIGHT');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método reduceRight - Perceorre todos os elementos do array, permitindo fazer operçaões com os elementos, porém começa do final do array
	console.log(
		finalArray.reduceRight(function VerifyElements(valor1, valor2, ind, arr) {
			return valor1 + valor2;
		})
	);
}

//PS: o reduceRight, no exemplo acima, não somou os números pois ele começou com strings, fazendo com que os números fossem somados a uma string

//SHIFT

{
	console.log('SHIFT');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método shift - remove o primeiro elemento do array, colocando ele sozinho, ou em outro array
	console.log(finalArray.shift());
	console.log(finalArray);
}

//UNSHIFT

{
	console.log('UNSHIFT');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método shift - adiciona elementos no inicio do array; e retorna a quantidade de elementos no meu array após adicionar os novo valores
	console.log(finalArray.unshift(-1, -2, -3));
	console.log(finalArray);
}

//SLICE

{
	console.log('SLICE');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método slice - pega alguma parte específica de um array
	console.log(finalArray.slice(3, 7)); //PEGA DO INDEX 3 AO 6, NÃO LEVA EM CONSIDERÇÃO O ÚLTIMO
	console.log(finalArray);
}

//SORT

{
	console.log('SORT');
	let arr1 = [3, 2, 1, 4, 6, 5];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método sort - organiza numericamente ou alfabeticamente o array
	console.log(finalArray.sort());
}

//SPLICE

{
	console.log('SPLICE');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método splice - remove u adiciona alguma parte específica de um array
	console.log(finalArray.splice(1, 2)); //PARA DO INDICE 1 E PEGA 2 ELEMENTOS A PARTIR DELE
	console.log(finalArray);

	console.log(finalArray.splice(1, 2, 'pato', 'de', 'jardim')); //PARA DO INDICE 1 E PEGA 2 ELEMENTOS A PARTIR DELE
	console.log(finalArray);
}

//TOSTRING

{
	console.log('TOSTRING');
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = ['t', 's', 'a', 's'];
	let finalArray = arr1.concat(arr2);

	//Método toString - converte todo o array para uma string
	console.log(finalArray.toString());
}

//ISARRAY
console.log('ISARRAY');
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = ['t', 's', 'a', 's'];
let finalArray = arr1.concat(arr2);

//Método Array.isArray - retorna um valor dizendo se o array é um array de fato ou não
console.log(typeof finalArray); //O ARRAY É DO TIPO OBJETO
console.log(Array.isArray(finalArray)); //COM O MÉTODO ISARRAY, TEMOS A INFORMAÇÕES SE ESSE OBJETO É NA REALIDADE UM ARRAY

finalArray.push({ nome: 'Matheus', idade: 22 });
console.log(Array.isArray(finalArray)); //MESMO COM UM OBJETO DENTRO, ELE AINDA RETORNA COMO TRUE, POIS O finalArray CONTINUA SENDO UM ARRAY
