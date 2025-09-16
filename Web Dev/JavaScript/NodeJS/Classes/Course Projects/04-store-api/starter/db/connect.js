//import mongoose
const mongoose = require('mongoose');

//connect to database
const connectDB = (url) => {
	//return a promisse - connect needs an url to connect to the database (MONGO_URI)
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
};

//export connecto to database function that takes an an argument
module.exports = connectDB;
