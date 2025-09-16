//IMPORTS
const Product = require('../models/productModel')
const Review = require('../models/reviewModel')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const path = require('path')

//CREATE NEW PRODUCT
const createProduct = async (req, res) => {
  //get the userId value from the authentication middlware, and set it up to the ref in the Product model (which is called user)
  req.body.user = req.user.userId

  //create new product
  const product = await Product.create(req.body)

  //response
  res.status(StatusCodes.CREATED).json({ product })
}

//GET ALL PRODUCT
const getAllProducts = async (req, res) => {
  //get all the products
  const products = await Product.find({})

  //if there is no products registred
  if (products.length < 1) {
    throw new CustomError.NotFoundError('There are no products registred')
  }

  //response
  res.status(StatusCodes.OK).json({ productsFound: products.length, products })
}

//GET SINGLE PRODUCT
const getSingleProduct = async (req, res) => {
  //destructure the id from the params
  const { id: productId } = req.params

  //check if the product with the provided id exists
  const product = await Product.findById(productId).populate('reviews')

  //if the product can't be found
  if (!product) {
    throw new CustomError.NotFoundError(`No product with ID: ${productId}`)
  }

  //if the product exists
  res.status(StatusCodes.OK).json({ product })
}

//UPDATE SINGLE PRODUCT
const updateProduct = async (req, res) => {
  //destructure the id from the params
  const { id: productId } = req.params

  //check if the product with the provided id exists and update it with "req.body"
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  })

  //if the product doesn't exist
  if (!product) {
    throw new CustomError.NotFoundError(`No product with ID: ${productId}`)
  }

  //if the product is found and updated
  res
    .status(StatusCodes.OK)
    .json({ product, message: `Updated product with ID: ${productId}` })
}

//DELETE SINGLE PRODUCT
const deleteProduct = async (req, res) => {
  //destructure the id from the params
  const { id: productId } = req.params

  //check if the product with the provided id exists
  const product = await Product.findById(productId)

  //if the product can't be found
  if (!product) {
    throw new CustomError.NotFoundError(`No product with ID: ${productId}`)
  }

  //delete the product
  //we use ".remove()" instead of "Product.findOneAndDelete()" because we can create a hook in the ProductSchema, so this way, when we remove the product, we trigger a hook in the schema that makes all the product reviews get deleted together
  await product.remove()

  //if the product is found and deleted
  res
    .status(StatusCodes.OK)
    .json({ product, message: `Deleted product with ID: ${productId}` })
}

//UPLOAD IMAGE TO PRODUCT
const uploadProductImage = async (req, res) => {
  //check of there is something uploaded
  if (!req.files) {
    throw new CustomError.BadRequestError('No file uploaded')
  }

  //set the uploaded file to productImage variable
  const productImage = req.files.image

  //check if the uploaded file is an image
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please upload an image')
  }

  //check if the uploaded image is smaller then 1MB
  const maxSize = 1024 * 1024
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller then 1MB'
    )
  }
  //get the image name and replace white spaces with dashes (-)
  const finalImageName = productImage.name.split(/[\s]+/).join('-')

  //create an image path
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${finalImageName}`
  )

  //move the uploaded image to the path
  await productImage.mv(imagePath)

  //response
  res.status(StatusCodes.OK).json({ image: `/uploads/${finalImageName}` })
}

const getSingleProductReviews = async (req, res) => {
  const { id: productId } = req.params
  const reviews = await Review.find({ product: productId })
  res.status(StatusCodes.OK).json({ count: reviews.length, reviews })
}

//EXPORTS
module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  getSingleProductReviews,
}
