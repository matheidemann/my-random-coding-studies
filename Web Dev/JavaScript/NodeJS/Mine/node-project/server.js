const express = require('express');
const morgan = require('morgan');
const app = express();
const { products, people } = require('./data/data.js');
const middleware = require('./middleware.js');
const autorizhe = require('./autorizhe.js');
const checkLogged = require('./checklogged.js');

//setup static and middleware - STATIC FILE IS A FILE THAT THE SERVER DOESN'T NEED TO CHANGE
// app.use(express.static('./public'));

//MIDDLEWARE
app.use('/api', middleware);
app.use('/', morgan('tiny'));

//api
app.get('/', (req, res) => {
	res.send(
		'<h1>Home Page</h1><a href="/api/products">Products</a><br/><a href="/api/new-products">Mapped Products</a>'
	);
});

//RETURN THE WHOLE JSON
app.get('/api/products', (req, res) => {
	console.log(req.user);
	res.json(products);
});

//RETURN THE MAPPED JSON
app.get('/api/new-products', (req, res) => {
	newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

//RETURN THE JSON WITH AN SPECIFIC ID
app.get('/api/products/:productID', (req, res) => {
	const { productID } = req.params;

	//IF PRODUCT DOES NOT EXIST
	if (productID > products.length) {
		return res.status(404).send('404 - The product does not exist');
	}

	//IF PRODUCT EXIST
	singleProduct = products.find((product) => {
		return product.id === Number(productID);
	});
	res.json(singleProduct);
});

//QUERY SEARCH
app.get('/api/v1/query', [autorizhe, checkLogged], (req, res) => {
	const { search, limit } = req.query;
	let queryProducts = [...products];

	//SEARCH
	if (search) {
		queryProducts = queryProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	//LIMIT
	if (limit) {
		queryProducts = queryProducts.slice(0, Number(limit));
	}

	if (queryProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}

	return res.status(200).json(queryProducts);
});

//get 404
app.all('*', (req, res) => {
	res.status(404).send('404 - Could not found');
});

//listen server
app.listen(5000, () => {
	console.log('server is listening on port 5000');
});
