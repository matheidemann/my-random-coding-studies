const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homepageFile = readFileSync('./website/index.html');
const homepageStyle = readFileSync('./website/style.css');
const homepageLogic = readFileSync('./website/functions.js');

const server = http.createServer((req, res) => {
	const url = req.url;
	//HOMEPAGE
	if (url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write(homepageFile);
		res.end();
	}
	//STYLES
	else if (url === '/style.css') {
		res.writeHead(200, { 'content-type': 'text/css' });
		res.write(homepageStyle);
		res.end();
	}
	//LOGIC
	else if (url === '/functions.js') {
		res.writeHead(200, { 'content-type': 'text/javascript' });
		res.write(homepageLogic);
		res.end();
	}
	//404
	else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>404</h1>');
		res.end();
	}
});

server.listen(5000);
