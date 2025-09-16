(function ReadyJS(win, doc) {
	'use strict';

	function MyAlert(event) {
		console.log(event.target); //mostra qual o alvo do evento
		alert('Oi');
	}

	//AO CLICAR EM UM ELEMENTO
	let myBtn = doc.querySelector('#btn');

	myBtn.addEventListener('click', MyAlert, false);

	//AO MUDAR ALGUMA OPÇÃO
	let mySelect = doc.querySelector('#select');

	mySelect.addEventListener('change', MyAlert, false);
})(window, document);
