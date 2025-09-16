const express = require('express')
const router = express.Router()
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} = require('../controllers/userController')

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin', 'owner'), getAllUsers)
// prettier-ignore
router
.route('/showMe')
.get(authenticateUser, showCurrentUser)
// prettier-ignore
router
.route('/updateUser')
.patch(authenticateUser, updateUser)
// prettier-ignore
router
.route('/updateUserPassword')
.patch(authenticateUser, updateUserPassword)
// prettier-ignore
router
  .route('/deleteUser')
  .delete(authenticateUser, authorizePermissions('admin', 'owner'), deleteUser)
// prettier-ignore
router
.route('/:id')
.get(authenticateUser, getSingleUser)

module.exports = router
