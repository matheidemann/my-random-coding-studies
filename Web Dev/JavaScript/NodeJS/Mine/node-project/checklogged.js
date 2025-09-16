//MIDDLEWARE FUNCTION
const checklogged = (req, res, next) => {
	console.log('USER LOGGED');
	next();
};

module.exports = checklogged;
