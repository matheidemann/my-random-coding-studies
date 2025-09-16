const { StatusCodes } = require('http-status-codes');
const User = require('../models/userModel');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
const CustomError = require('../errors');

//REGISTER A NEW USER
const registerNewUser = async (req, res) => {
	const { name, email, password } = req.body;

	//SETUP IF THE USER WILL BE AN ADMIN OR AN USER
	const isFirstRegistredUser = (await User.countDocuments({})) === 0;
	const role = isFirstRegistredUser ? 'admin' : 'user';

	//CREATE USER
	const user = await User.create({ name, email, password, role });

	//CREATE TOKENUSER OBJECT
	const tokenUser = createTokenUser(user);

	attachCookiesToResponse({ res, tokenUser });

	//RESPONSE
	res.status(StatusCodes.CREATED).json({ tokenUser });
};

//LOGIN
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	//CHECK IF EMAIL AND PASSWORD ARE PROVIDED
	if (!email || !password) {
		throw new CustomError.BadRequestError('Please provide email and password');
	}

	//FIND THE USER BY THE PROVIDED EMAIL
	const user = await User.findOne({ email });

	//IF USER DOESN'T EXIST
	if (!user) {
		throw new CustomError.UnauthenticatedError('Invalid credentials');
	}

	//CHECK IF THE PASSWORD IS CORRECT
	const isPasswordCorrect = await user.comparePassword({
		candidatePassword: password,
	});
	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid credentials');
	}

	//IF EVERYTHING IS CORRECT
	const tokenUser = createTokenUser(user);
	attachCookiesToResponse({ res, tokenUser });

	//RESPONSE
	res.status(StatusCodes.OK).json({ tokenUser });
};

//LOGOUT
const logoutUser = async (req, res) => {
	res.cookie('token', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now()),
	});
	res.status(StatusCodes.OK).json({ msg: 'You logged out' });
};

module.exports = { registerNewUser, loginUser, logoutUser };
