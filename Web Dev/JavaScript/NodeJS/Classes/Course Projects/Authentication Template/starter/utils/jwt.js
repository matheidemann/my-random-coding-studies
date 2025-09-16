const jwt = require('jsonwebtoken');
const env = process.env;

//CREATE JWT
const createJWT = ({ payload }) => {
	//the argument is inside brackets, so we can pass it to the function as an object, but it's important to note that in authContoller, when we invoque the "createJWT" function, we need to provide the argument as an named object createJWT({payload:value})

	//CREATE TOKEN
	const token = jwt.sign(payload, env.JWT_SECRET, {
		expiresIn: env.JWT_LIFETIME,
	});

	//RETURN THE CREATED TOKEN
	return token;
};

//VERIFY IF THE TOKEN IS VALID
const isTokenValid = ({ token }) => {
	return jwt.verify(token, env.JWT_SECRET);
};

//ATTACH COOKIES TO RESPONSE
const attachCookiesToResponse = ({ res, tokenUser }) => {
	//CREATE TOKEN
	const token = createJWT({ payload: tokenUser });

	//CREATE COOKIE
	const oneDay = 1000 * 60 * 60 * 24;
	res.cookie('token', token, {
		httpOnly: true,
		expires: new Date(Date.now() + oneDay),
		secure: process.env.NODE_ENV === 'production',
		signed: true,
	});
};

//EXPORT
module.exports = {
	createJWT,
	isTokenValid,
	attachCookiesToResponse,
};

//in sign, first we pass the payload (which will create a token value), then we pass the secret, and then the properties, like the token lifetime
