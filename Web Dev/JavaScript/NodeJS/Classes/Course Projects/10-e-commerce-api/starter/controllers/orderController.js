//IMPORTS

const Order = require('../models/orderModel')
const Product = require('../models/productModel')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')
const { StatusCodes } = require('http-status-codes')

//FAKE STRIPE API
const fakeStripeAPI = async (amount, currency) => {
  const client_secret = 'random'
  return { client_secret, amount }
}

//GET ALL ORDERS
const getAllOrders = async (req, res) => {
  //find all the orders
  const orders = await Order.find({})

  //if there are no orders
  if (!orders || orders.length < 1) {
    throw new CustomError.NotFoundError('No orders submitted')
  }

  //response
  res.status(StatusCodes.OK).json({ totalResults: orders.length, orders })
}

//GET SINGLE ORDER
const getSingleOrder = async (req, res) => {
  //find the order
  const order = await Order.findOne({ _id: req.params.id })

  //if the order with the provided id doesn't exist
  if (!order) {
    throw new CustomError.NotFoundError(
      `Could not found order with the ID: ${req.params.id}`
    )
  }

  //check if the order id matches the user id
  checkPermissions(req.user, order.user)

  //the the ids match
  res.status(StatusCodes.OK).json({ order })
}

//GET USER CURRENT ORDERS
const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId })
  res.status(StatusCodes.OK).json({ totalResults: orders.length, orders })
}

//CREATE A NEW ORDER
const createOrder = async (req, res) => {
  //destructure from req.body
  const { items: cartItems, tax, shippingFee } = req.body

  //check if the cart is empty
  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided')
  }

  //check if the tax and shippingFee was provided
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError('Please provide tax and shipping fee')
  }

  //
  let orderItems = []
  let subtotal = 0

  //for loop to check every item in the cartItems
  for (const item of cartItems) {
    const { product: productId } = item

    //check if the product exists on the database
    const product = await Product.findOne({ _id: productId })

    //if the product doesn't exist
    if (!product) {
      throw new CustomError.NotFoundError(`No product with ID: ${productId}`)
    }

    //if the product exist, destructure these properties
    const { name, price, image, _id } = product

    //create a single order item
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    }

    //add item to order
    orderItems = [...orderItems, singleOrderItem]

    //calculate subtotal
    subtotal += item.amount * price
  }

  //calculate total final price
  const total = tax + shippingFee + subtotal

  //stripe (fake API)
  const paymentIntentId = await fakeStripeAPI({
    amount: total,
    currency: 'usd',
  })

  //create the order
  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    tax,
    shippingFee,
    clientSecret: paymentIntentId.client_secret,
    user: req.user.userId,
  })

  //response
  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret })
}

//UPDATE ORDER STATUS
const updateOrder = async (req, res) => {
  const { paymentIntentId } = req.body

  //find the order
  const order = await Order.findOne({ _id: req.params.id })

  if (!order) {
    throw new CustomError.NotFoundError(
      `Could not found order with the ID: ${req.params.id}`
    )
  }

  //check if the order id matches the user id
  checkPermissions(req.user, order.user)

  //
  order.paymentIntentId = paymentIntentId
  order.status = 'paid'
  await order.save()

  //the the ids match
  res.status(StatusCodes.OK).json({ order })
}

//DELETE ORDER
const deleteOrder = async (req, res) => {
  //find the order
  const order = await Order.findOne({ _id: req.params.id })

  //if the order doesn't exist
  if (!order) {
    throw new CustomError.NotFoundError(
      `Could not found order with the ID: ${req.params.id}`
    )
  }

  //delete the order
  await order.remove()

  //response
  res
    .status(StatusCodes.OK)
    .json({ message: `Success to delete order with ID: ${order._id}`, order })
}

//EXPORTS
module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
}
