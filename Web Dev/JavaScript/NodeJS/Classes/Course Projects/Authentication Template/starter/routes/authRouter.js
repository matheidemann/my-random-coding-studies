const express = require('express');
const router = express.Router();

const {
	registerNewUser,
	loginUser,
	logoutUser,
} = require('../controllers/authController');

router.post('/register', registerNewUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
