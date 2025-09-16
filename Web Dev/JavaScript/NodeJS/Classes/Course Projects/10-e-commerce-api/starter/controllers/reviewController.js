//IMPORTS
const Review = require('../models/reviewModel')
const Product = require('../models/productModel')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')

//CREATE NEW REVIEW
const createReview = async (req, res) => {
  //get the productId from the body
  const { product: productId } = req.body

  //check if the product with the provided id exists
  const doesProductExist = await Product.findOne({ _id: productId })

  //if the product doesn't exist
  if (!doesProductExist) {
    throw new CustomError.NotFoundError(`No product with ID: ${productId}`)
  }

  //destructure the userId from the req.user, which values are set in the authentication middleware
  const { userId } = req.user

  //check if there is a review with the matching productId and userId
  const userReviewAlreadySubmited = await Review.findOne({
    product: productId,
    user: userId,
  })

  //if there is, it means that the user already submited an review for this product, so throws an error
  if (userReviewAlreadySubmited) {
    throw new CustomError.BadRequestError(
      'You already submitted a review for this product'
    )
  }

  //set a new propertie in req.body which is user, and it gets the userId value that we got in the authentication middleware
  req.body.user = userId

  //create the review with all the data provided in the req.body
  const review = await Review.create(req.body)

  //response
  res.status(StatusCodes.CREATED).json({ review })
}

//GET ALL REVIEWS
const getAllReviews = async (req, res) => {
  //get all the reviews - populate is used to reference documents in other collections (so we can get specific info about a product when requesting all reviews)
  const reviews = await Review.find({})
    .populate({
      path: 'product',
      select: 'name price company',
    })
    .populate({
      path: 'user',
      select: 'name',
    })

  //check if there is at least one review submitted
  if (reviews.length < 1) {
    throw new CustomError.NotFoundError('There are no reviews submitted')
  }

  //response
  res.status(StatusCodes.OK).json({ reviews })
}

//GET SINGLE REVIEW
const getSingleReview = async (req, res) => {
  //check for an review with the provided id
  const review = await Review.findOne({ _id: req.params.id })
    .populate({
      path: 'product',
      select: 'name price company',
    })
    .populate({
      path: 'user',
      select: 'name',
    })

  //if there is not review with the provided id
  if (!review) {
    throw new CustomError.NotFoundError(
      `There is no review with the id: ${req.params.id}`
    )
  }

  //response
  res.status(StatusCodes.OK).json({ review })
}

//UPDATE EXISTING REVIEW
const updateReview = async (req, res) => {
  const { id: reviewId } = req.params
  const { rating, title, comment } = req.body

  const review = await Review.findOne({ _id: reviewId })

  if (!review) {
    throw new CustomError.NotFoundError(
      `Could not find review with the ID: ${reviewId}`
    )
  }

  checkPermissions(req.user, review.user)

  review.rating = rating
  review.title = title
  review.comment = comment

  await review.save()

  res
    .status(StatusCodes.OK)
    .json({ review, msg: `Updated review with the ID:${reviewId}` })
}

//DELETE EXISTING REVIEW
const deleteReview = async (req, res) => {
  //check for an review with the provided id
  const review = await Review.findOne({ _id: req.params.id })

  //if there is not review with the provided id
  if (!review) {
    throw new CustomError.NotFoundError(
      `There is no review with the id: ${req.params.id}`
    )
  }

  //check if the userId from the logged user and the userId of the review match
  checkPermissions(req.user, review.user)

  //remove the review
  await review.remove()

  //response
  res
    .status(StatusCodes.OK)
    .json({ review, msg: `Deleted review with the id: ${req.params.id}` })
}

//EXPORTS
module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
