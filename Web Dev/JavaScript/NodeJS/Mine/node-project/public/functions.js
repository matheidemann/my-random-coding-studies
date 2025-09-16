const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

let blueColor = true;

btn.addEventListener('click', function () {
	console.log('hello');
	if (blueColor) {
		color.style.backgroundColor = 'red';
		blueColor = false;
	} else {
		color.style.backgroundColor = 'blue';
		blueColor = true;
	}
});
