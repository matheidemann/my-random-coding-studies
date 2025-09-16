const CustomError = require('../errors')

const checkPermissions = (requestUser, mongoUserId) => {
  //if the user is an admin
  if (requestUser.role === 'admin') {
    return
  }
  //if the user id from "req.user.userId" matches the id provided in the req.params
  if (requestUser.userId === mongoUserId.toString()) {
    return
  }
  //if none of the conditions match (user is not an admin and it's trying to access another user id)
  throw new CustomError.UnauthorizedError(
    `You are not authorized to access this route.`
  )
}

module.exports = checkPermissions
