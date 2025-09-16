const User = require('../models/userModel')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const {
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
} = require('../utils')

//GET ALL USERS
const getAllUsers = async (req, res) => {
  //if the user is an admin, then return all the users without the password info
  const users = await User.find({ role: 'user' }).select('-password')
  res.status(StatusCodes.OK).json({ users })
}

//GET SINGLE USER
const getSingleUser = async (req, res) => {
  //get the id from the params
  const { id } = req.params

  //checj if an user with the provided id exists and don't return the password
  const user = await User.findOne({ _id: id }).select('-password')

  //if the user doesn't exist
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id ${id}`)
  }

  //check the user permission to access the route with the provided id
  checkPermissions(req.user, user._id)

  //response
  res.status(StatusCodes.OK).json({ user })
}

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

//UPDATE USER WITH SAVE
const updateUser = async (req, res) => {
  //get the name and email from the body
  const { name, email } = req.body

  //if the name and the email aren't provided
  if (!name || !email) {
    throw new CustomError.BadRequestError('Please provide your name and email')
  }

  //find an user with the matching id
  const user = await User.findOne({ _id: req.user.userId })

  //update user name and email
  user.name = name
  user.email = email

  //save the user with new values
  await user.save()

  //create a new token for the updated user
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, tokenUser })

  //response
  res.status(StatusCodes.OK).json({ user })
}

const updateUserPassword = async (req, res) => {
  //get the old and the new password from the body
  const { oldPassword, newPassword } = req.body

  //check if the user provided both values
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError(
      'Please provide or old an your new password'
    )
  }

  //find an user that has the corresponding ID (we can check from "req.user.userId" because the updateUserPassword method has the "authenticateUser" middleware)
  const user = await User.findOne({ _id: req.user.userId })

  //check if the old password provided matches the user password in the database
  const isPasswordCorrect = await user.comparePassword({
    candidatePassword: oldPassword,
  })

  //if the password doesn't match, throw an error
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid credentials')
  }

  //if the password matches, get the "user.password" (which was got by the User.findOne, and not by the "authenticateUser" middleware, 'cause  this one will return an user in the request, as "req.user". So what we are doing here is changing the values in the mongoose variable)
  user.password = newPassword

  //save the user with new values
  await user.save()

  //response
  res.status(StatusCodes.OK).json({
    msg: `Password was changed from ${oldPassword} to ${newPassword}`,
  })
}

const deleteUser = async (req, res) => {
  //find the user by the ID and delete it
  const user = await User.findByIdAndDelete(req.body.userId)

  //if user can not be found
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.body.userId}`)
  }

  //if user exists
  res
    .status(StatusCodes.OK)
    .json({ user, msg: `Delete user with id: ${req.body.userId}` })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  deleteUser,
}

//UPDATE USER (WITH FINDONEANDUPDATE)
// const updateUser = async (req, res) => {
// 	const { name, email } = req.body;

// 	if (!name || !email) {
// 		throw new CustomError.BadRequestError('Please provide your name and email');
// 	}

// 	const user = await User.findOneAndUpdate(
// 		{ _id: req.user.userId },
// 		{ name, email },
// 		{
// 			new: true,
// 			runValidators: true,
// 		}
// 	);

// 	const tokenUser = createTokenUser(user);
// 	attachCookiesToResponse({ res, tokenUser });

// 	res.status(StatusCodes.OK).json({ user });
// };
