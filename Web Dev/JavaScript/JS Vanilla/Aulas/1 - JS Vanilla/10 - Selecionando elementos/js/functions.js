(function ReadyJS(win, doc) {
	'use strict';

	//SELECIONANDO ELEMENTOS COM IDS
	let myElemID = doc.getElementById('elemID');

	myElemID.style.backgroundColor = '#ffffff';
	myElemID.style.color = '#000000';

	//SELECIONANDO ELEMENTOS COM CLASSES
	let myElemClass = doc.getElementsByClassName('elem-class'); //PS: É PRECISO DEFINIR O INDICE PARA ACESSAR ALGUMA CLASSE, MESMO HAVENDO APENAS UMA

	myElemClass[0].style.backgroundColor = 'pink';
	myElemClass[1].style.backgroundColor = 'red';
	myElemClass[2].style.backgroundColor = 'blue';

	//SELECIONANDO ELEMENTOS PELO NOME
	let myElemName = doc.getElementsByName('car-img'); //PS: OS NAMES TAMBÉM É NECESSÁRIO DEFINIR O INDICE
	let myArrayLength = myElemName.length;
	myElemName[0].style.width = '600px';

	//SELECIONANDO ELEMENTOS PELO NOME DA TAG
	let myElemTag = doc.getElementsByTagName('span'); //PS: OS NAMES TAMBÉM É NECESSÁRIO DEFINIR O INDICE
	myElemTag[0].style.fontSize = '22px';

	//SELECIONANDO ELEMENTOS POR QUERRY
	let myElemQuerry = doc.querySelector('.elem-class-box .elem-class span'); //PS: O QUERRYSELECTOR SELECIONA APENAS A PRIMEIRA OCORRÊNCIA BUSCADA
	myElemQuerry.style.color = 'red';

	//SELECIONANDO VÁRIOS ELEMENTOS POR QUERRY
	//EXEMPLO 1 ----------------------------------------------
	let myElemQuerryAll = doc.querySelectorAll(
		'.elem-class-box .elem-class span'
	);

	for (let index = 0; index < myElemQuerryAll.length; index++) {
		myElemQuerryAll[index].style.fontSize = '50px';
	}

	//EXEMPLO 2 ----------------------------------------------
	let myElemButtons = doc.querySelectorAll('.btn');

	// for (let index = 0; index < myElemButtons.length; index++) {
	// 	myElemButtons[index].addEventListener('click', function () {
	// 		doc.querySelector('body').style.backgroundColor = this.getAttribute(
	// 			'data-color'
	// 		); //O THIS FAZ REFERENCIA AO MYELEMBUTTONS (OBJ)
	// 	});
	// }

	//EXEMPLO 3 (IGUAL AO DE CIMA, MAS UM POUCO DIFERENTE) ----------------------------------------------
	let myBody = doc.querySelector('body');

	function ChangeColor(event) {
		myBody.style.backgroundColor = event.target.dataset.color;
	}

	for (let index = 0; index < myElemButtons.length; index++) {
		myElemButtons[index].addEventListener('click', ChangeColor, false);
	}

	//
})(window, document);
