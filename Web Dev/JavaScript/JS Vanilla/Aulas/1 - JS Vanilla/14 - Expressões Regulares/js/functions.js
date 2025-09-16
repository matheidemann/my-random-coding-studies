(function ReadyJS(win, doc) {
	'use strict';

	/* Expressões regulares são regras utilizadas, principalmente, para manipulação de strings, seja para localizar, substituir ou separar textos. Utilizando regras, você consegue manipular pedaços de strings. */

	var myText =
		'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo. É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js. Como uma linguagem multiparadigma, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos, apresentando recursos como fechamentos e funções de alta ordem comumente indisponíveis em linguagens populares como Java e C++. Atualmente o JS está na versão ES6.';

	//MÉTODO MATCH
	// Busca a combinação de valores de acordo com a regra. As expressões regulares são escritas dentro de 2 barras // e após a última barra podem ser inseridas opcionalmente flags de configuração.

	{
		let result = myText.match();
	}

	//FLAGS
	//Flags são regras de aplicação geral. São 03 as principais:
	//g - global
	//i - ignore case
	//m - multiples lines

	//Quando há qualquer coisa entra das duas barras, ele procura todas as ocorrências da determinada substring
	{
		let regex = /a/; //neste caso, ele retorna apenas a primeira ocorrência
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /a/g; //agora, com a flag g, será retornado todas as ocorrências de 'a'
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /a/gi; //agora, com a flag i, será retornado todas as ocorrências de 'a' ou 'A', isto é, ignora o tipo de case
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /a/gim; //agora, com a flag i, será retornado todas as ocorrências de 'a' ou 'A', isto é, ignora o tipo de case
		let result = myText.match(regex);
		console.log(result);
	}

	//REGRAS GERAIS
	//o pipe ou colchetes significa OU
	{
		let regex = /a|e/gi;
		let result = myText.match(regex);
		console.log(result);
	}
	{
		let regex = /[ae]/gi;
		let result = myText.match(regex);
		console.log(result);
	}

	//o hífen é utilizado para pegar um RANGE, isto é, de algum lugar até outro
	{
		let regex = /[a-z]/gi; //PS: sem os colchetes seria procurado a substring 'a-z', e não de 'a' à 'z'
		let result = myText.match(regex);
		console.log(result);
	}

	//o parenteses serve para pegar exatamente o que está escrito
	{
		let regex = /(Javascript)|(HTML)|(CSS)/gi; //PS: sem os colchetes seria procurado a substring 'a-z', e não de 'a' à 'z'
		let result = myText.match(regex);
		console.log(result);
	}

	//o sinal de adição serve para pegar a repetição do último caractere
	{
		let regex = /(s+)/gi;
		let result = myText.match(regex);
		console.log(result);
	}

	//o ponto serve para indicar "qualquer coisa"
	{
		let regex = /(Java).+/gi; //PS: neste caso, ele pegou todo o texto pois ele pega "qualquer caractere" com o ponto, e a repetição de qualquer caractere em seguida
		let result = myText.match(regex);
		console.log(result);
	}

	//o acento circunflexo serve para pegar o início da expressão, e o cifrão para pegar o fim da expressão
	{
		let regex = /(^java).+(rada)/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//as chaves são para pegar tal substring repetida por tanto número de vezes
	{
		let regex = /s{2}|r{2}/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//a interrogação coloca algo como opcional
	{
		let regex = /ss?|rr?/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//o \d pega todos os dígitos, e o \D pega todos os caracteres que não sejam dígitos, inclsive espaços
	{
		let regex = /\d/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /\D/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//o \w pega todos os caracteres alfanuméricos, sem considerar os espaços, e o /W pega todos os caracteres que não são alfanuméricos
	{
		let regex = /\w/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /\W/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//o \s pega todos os espaços, e o /S pega todos os caracteres que não são espaços
	{
		let regex = /\s/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	{
		let regex = /\S/gim;
		let result = myText.match(regex);
		console.log(result);
	}

	//MÉTODO REPLACE
	//substitui algo pelo texto colocado no parâmetro
	{
		let regex = /(Javascript)/gim;
		let result = myText.replace(regex, 'PATO DE JARDIM');
		console.log(result);
	}

	//MÉTODO SEARCH
	//retorna o indice inicial do caractere da substring
	{
		let regex = /(suporta)/gim;
		let result = myText.search(regex);
		console.log(result);
	}
})(window, document);
