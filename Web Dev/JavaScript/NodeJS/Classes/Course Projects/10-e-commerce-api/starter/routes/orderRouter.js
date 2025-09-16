const express = require('express')
const router = express.Router()

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController')

router
  .route('/')
  .get([authenticateUser, authorizePermissions('admin')], getAllOrders)
  .post(authenticateUser, createOrder)

// prettier-ignore
router
  .route('/showAllMyOrders')
  .get(authenticateUser, getCurrentUserOrders)

router
  .route('/:id')
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder)
  .delete([authenticateUser, authorizePermissions('admin')], deleteOrder)

module.exports = router
