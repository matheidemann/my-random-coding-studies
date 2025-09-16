//import env
require('dotenv').config();

//connect to database
const connectDB = require('./db/connect');

//import product schema
const Product = require('./models/product');

//import products json
const jsonProducts = require('./products.json');

//start
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		//delete all data from TaskAPI collection
		await Product.deleteMany();
		//pass all products.json data to database
		await Product.create(jsonProducts);
		console.log('success');
		//terminate the server
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

start();
