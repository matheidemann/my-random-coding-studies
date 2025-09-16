const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
	let customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || 'Something went wrong...',
	};

	//validation error
	if (err.name === 'ValidationError') {
		customError.msg = Object.values(err.errors)
			.map((item) => item.message)
			.join(', ');
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	//castError
	if (err.name === 'CastError') {
		//check for ID length
		const idLength = err.value.length;
		let lengthMsg = '';

		//if ID has more chracters than normal
		if (idLength > 24) {
			lengthMsg = `Your ID has ${idLength} characters, the correct should 24!`;
		}
		//if ID has less chracters than normal
		if (idLength < 24) {
			lengthMsg = `Your ID has ${idLength} characters, the correct should 24!`;
		}

		//error msg
		customError.msg = `Could not found job with id: ${err.value}. ${lengthMsg}`;
		customError.statusCode = StatusCodes.NOT_FOUND;
	}

	//if email is already in the db
	if (err.code && err.code === 11000) {
		customError.msg = `Duplicate value at field ${Object.keys(err.keyValue)}`;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	// return res.status(customError.statusCode).json({ msg: err });
	return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
