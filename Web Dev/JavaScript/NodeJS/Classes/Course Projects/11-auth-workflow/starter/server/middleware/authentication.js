const CustomError = require('../errors')
const { isTokenValid } = require('../utils')
const Token = require('../models/tokenModel')
const { attachCookiesToResponse } = require('../utils')

const authenticateUser = async (req, res, next) => {
  //get the tokens from the signed cookies
  const { refreshToken, accessToken } = req.signedCookies

  try {
    //check if access token exists
    if (accessToken) {
      //check if the token is valid and return the tokenUser object
      const payload = isTokenValid(accessToken)

      // attach the payload.tokenUser to the req
      req.user = payload.tokenUser

      //next
      return next()
    }
    //Everytime there is no access token (is expired), if the refresh token is present we still generate both cookies
    //check if the token is valid and return the tokenUser object
    const payload = isTokenValid(refreshToken)

    //check if the token existis
    const existingToken = await Token.findOne({
      user: payload.tokenUser.userId,
      refreshToken: payload.refreshToken,
    })

    //if the token doesn't exist or the value of isValid is false
    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Authentication invalid')
    }

    //attach the cookies to response
    attachCookiesToResponse({
      res,
      user: payload.tokenUser,
      refreshToken: existingToken.refreshToken,
    })

    //set the values from tokenUser to the request.user
    req.user = payload.tokenUser
    next()
  } catch (err) {
    //if theres an error with the token validation
    throw new CustomError.UnauthenticatedError('Authentication invalid')
  }
}

const authorizePermissions = (...roles) => {
  //this middlware needs to be invoqued after the "authenticateUser" middleware, otherwise we will get an error because we don't have the "user" object in the "req"
  //if user without the role of "admin" tries to access this route, throw an permission error. This is being manipulated in the "authentication" middleware, with the method of "authenticateUser"
  //we return a function out of this function, because we need a callback function, so this "authorizePermissions" doesn't get executed right away (cause it is being invoqued in the userRoutes, as it is passing arguments)
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        `Unauthorized to access this route.`
      )
    }
    next()
  }
}

module.exports = { authenticateUser, authorizePermissions }
