(function ReadyJS(win, doc) {
	'use strict';

	let myBtnBox = doc.querySelector('#btn-box'); //div da parent
	let myBtn1 = doc.querySelector('#btn-1'); //div da child que já está no HTML

	function EventSelect() {
		if (event.target.id === 'btn-1') {
			CreateElement();
		} else if (event.target.id === 'btn-2') {
			ShowAlert();
		}
	}

	function CreateElement() {
		const myBtn2 = doc.createElement('button'); //cria uma nova constante, que será utilizada para o novo button
		myBtn2.id = 'btn-2'; //define a id do novo button
		myBtn2.innerHTML = 'btn-2'; //define o html do novo button
		myBtnBox.appendChild(myBtn2); //coloca o novo button dentro da div parent
	}

	function ShowAlert() {
		alert('myBtn2');
	}

	myBtnBox.addEventListener('click', EventSelect, false);

	/*A DIV PARENT RECEBE ESSE EVENTO, O QUAL AO CLICK EM QUALQUER LUGAR DA DIV, DIRECIONA PARA O EVENT SELECT, ONDE CASO O CLICK DO USUÁRIO NO EVENTO, SEJA EM CIMA DE ALGO COM O ID BTN-1, ELE EXECUTARÁ OUTRA FUNÇÃO, PARA CRIAR UM ELEMENTO NOVO, E AINDA, CASO CLICK NESTE NOVO ELEMENTO, CHAMARÁ OUTRA FUNÇÃO PARA MOSTRAR UM ALERTA. A QUESTÃO É, O EVENTO ESTÁ NA DIV PARENT, E NÃO NAS CHILDS, PORÉM, COM O EVENT.TARGET.ID, É POSSÍVEL DEFINIR QUE OS EVENTOS DESCRITOS APENAS ACONTECERÃO AO CLICAR NO ALVO DEMARCADO, E NÃO NA DIV EM SI*/
})(window, document);
