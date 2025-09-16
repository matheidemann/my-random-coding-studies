//IMPORTS
const { StatusCodes } = require('http-status-codes')
const User = require('../models/userModel')
const Token = require('../models/tokenModel')
const { attachCookiesToResponse, createTokenUser } = require('../utils')
const CustomError = require('../errors')
const crypto = require('crypto')
const {
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
} = require('../utils')

//REGISTER A NEW USER
const registerNewUser = async (req, res) => {
  const { name, email, password } = req.body

  //SETUP IF THE USER WILL BE AN ADMIN OR AN USER
  const isFirstRegistredUser = (await User.countDocuments({})) === 0
  const role = isFirstRegistredUser ? 'admin' : 'user'

  const verificationToken = crypto.randomBytes(40).toString('hex')

  //CREATE USER
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  })

  const origin = 'http://localhost:3000'

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  })

  //RESPONSE
  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Please verify your email', user })
}

//LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body

  //CHECK IF EMAIL AND PASSWORD ARE PROVIDED
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password')
  }

  //FIND THE USER BY THE PROVIDED EMAIL
  const user = await User.findOne({ email })

  //IF USER DOESN'T EXIST
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid credentials')
  }

  //CHECK IF THE PASSWORD IS CORRECT
  const isPasswordCorrect = await user.comparePassword({
    candidatePassword: password,
  })
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid credentials')
  }

  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError('Please verify your email first')
  }

  //IF EVERYTHING IS CORRECT
  const tokenUser = createTokenUser(user)

  //create refresh token
  let refreshToken = ''

  //check for existing token
  const existingToken = await Token.findOne({ user: user._id })

  //if the token exists
  if (existingToken) {
    //destructure the isValid propertie from the token in the db
    const { isValid } = existingToken

    //if isValid id set to false
    if (!isValid) {
      throw new CustomError.UnauthenticatedError('Invalid credentials')
    }

    //if isValid is set to true, then set the refresh token to the refresh token from the token in the db
    refreshToken = existingToken.refreshToken

    //attach to cookies to response with the existing refresh token
    attachCookiesToResponse({ res, tokenUser, refreshToken })
    res.status(StatusCodes.OK).json({ tokenUser, existingToken })
    return
  }

  //if the token doesn't exist, set token values
  refreshToken = crypto.randomBytes(40).toString('hex')
  const userAgent = req.headers['user-agent']
  const ip = req.ip
  const userToken = { refreshToken, userAgent, ip, user: user._id }

  //create token
  const token = await Token.create(userToken)

  attachCookiesToResponse({ res, tokenUser, refreshToken })

  //RESPONSE
  res.status(StatusCodes.OK).json({ tokenUser, token })
}

//LOGOUT
const logoutUser = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId })
  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'You logged out' })
}

//VERIFY EMAIL
const verifyEmail = async (req, res) => {
  //these destructured values are coming from the axios.post in the frontend (Verify.js)
  const { verificationToken, email } = req.body

  //try to find an user with the matching email
  const user = await User.findOne({ email })

  //if can't found user
  if (!user) {
    throw new CustomError.UnauthenticatedError('Verification failed')
  }

  //if the user is already verified
  if (user.isVerified) {
    throw new CustomError.UnauthenticatedError('Your email is already verified')
  }

  //if the provided verification token is different from the verification token of the user in the db
  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError('Verification failed')
  }

  //if no erros, verify the user
  user.isVerified = true
  user.verified = Date.now()
  user.verificationToken = null

  //save the current user
  await user.save()

  //response
  res.json({ msg: 'Email verified', user })
}

//FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  //get the email from the body
  const { email } = req.body

  //check if the email is provided
  if (!email) {
    throw new CustomError.BadRequestError('Please provide a valid email')
  }

  //check if the user exists
  const user = await User.findOne({ email })

  //if the user exists
  if (user) {
    //create a hashed password token (you cannot unhash, only compare)
    const passwordToken = crypto.randomBytes(80).toString('hex')

    //send email
    const origin = 'http://localhost:3000'
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      verificationToken: passwordToken,
      origin,
    })

    //create password token expiration date
    const tenMinutes = 1000 * 60 * 10
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes)

    //set the password token value and exp date in the user database
    user.passwordToken = createHash(passwordToken)
    user.passwordTokenExpirationDate = passwordTokenExpirationDate

    //save the current user
    await user.save()
  }

  //response
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Please check your email for reset your password link' })
}

//RESET PASSWORD
const resetPassword = async (req, res) => {
  const { verificationToken, email, password } = req.body

  //check if all the need values are provided
  if (!verificationToken || !email || !password) {
    throw new CustomError.BadRequestError('Please provide all values')
  }

  //try to find an user with the matching email
  const user = await User.findOne({ email })

  //if the user exists
  if (user) {
    //check for current date
    const currentDate = new Date()

    //if the passed token is the same as the token from the user in the db and the expiration date is still valid
    if (
      user.passwordToken === createHash(verificationToken) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password
      user.passwordToken = null
      user.passwordTokenExpirationDate = null
      await user.save()
    }
  }

  //response
  res.status(StatusCodes.OK).json({ msg: 'Password updated' })
}

//EXPORTS
module.exports = {
  registerNewUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
}
