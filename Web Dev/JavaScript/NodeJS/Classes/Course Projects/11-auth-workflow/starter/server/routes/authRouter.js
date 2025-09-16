const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')

const {
  registerNewUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController')

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.delete('/logout', authenticateUser, logoutUser)
router.post('/verify-email', verifyEmail)
router.post('/reset-password', resetPassword)
router.post('/forgot-password', forgotPassword)

module.exports = router
