//env
require('dotenv').config();
const port = process.env.PORT;
//async errors
require('express-async-errors');

//express
const express = require('express');
const app = express();

//connect to mongoDB
const connectDB = require('./db/connect');

//products router
const productsRouter = require('./routes/products');

//error middlwares
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middlwares
app.use(express.json());

//routes
app.get('/', (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">API</a>');
});

app.use('/api/v1/products', productsRouter);

//products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//start server
const start = async () => {
	try {
		//connectDB
		await connectDB(process.env.MONGO_URI);
		//start server
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch (err) {
		//if theres an error
		console.log(err);
	}
};

//start server
start();
