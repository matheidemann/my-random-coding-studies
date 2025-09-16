const CustomError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
	//get the token from the signed cookies
	const token = req.signedCookies.token;

	//if token does not exist, throw an error
	if (!token) {
		throw new CustomError.UnauthenticatedError('Authentication invalid');
	}

	//if token exists
	try {
		//verify if the token is valid
		//this will return the token info, and the destructure they right away
		const { name, userId, role } = isTokenValid({ token });

		//we create a new object called "user" in the req, and place the name, userId and role as properties, so if will be available in other middlwares, like getAllUsers
		req.user = { name, userId, role };

		//pass to the next middlware
		next();
	} catch (err) {
		//if theres an error with the token validation
		throw new CustomError.UnauthenticatedError('Authentication invalid');
	}
};

const authorizePermissions = (...roles) => {
	//this middlware needs to be invoqued after the "authenticateUser" middleware, otherwise we will get an error because we don't have the "user" object in the "req"
	//if user without the role of "admin" tries to access this route, throw an permission error. This is being manipulated in the "authentication" middleware, with the method of "authenticateUser"
	//we return a function out of this function, because we need a callback function, so this "authorizePermissions" doesn't get executed right away (cause it is being invoqued in the userRoutes, as it is passing arguments)
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			throw new CustomError.UnauthorizedError(
				`Unauthorized to access this route.`
			);
		}
		next();
	};
};

module.exports = { authenticateUser, authorizePermissions };
