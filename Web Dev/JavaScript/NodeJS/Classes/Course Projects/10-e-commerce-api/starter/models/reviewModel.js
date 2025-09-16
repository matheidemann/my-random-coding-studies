const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide a rating'],
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide a review title'],
      maxlength: 100,
    },
    comment: {
      type: String,
      required: [true, 'Please provide a review text'],
      maxlength: 1000,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  { timestamps: true }
)

//a review can only be submited if the productId and userId haven't been stored before
ReviewSchema.index({ product: 1, user: 1 }, { unique: true })

//construct the averageRating
ReviewSchema.statics.calculateAverageRating = async function (productId) {
  //this.aggregate = we are getting the Review model
  const result = await this.aggregate([
    //we are filtering through all the reviews that the "product" propertie matches the "productId" argument we passed
    { $match: { product: productId } },

    //after we filter all the reviews with the "product" propertie that matches the "productId", we make a group
    {
      $group: {
        _id: null,
        //here, we are getting all the ratings from the filtered reviews and creating an average number between the lowest and biggest one
        averageRating: { $avg: '$rating' },
        //here, we are summing all the submited reviews
        numOfReviews: { $sum: 1 },
      },
    },
  ])
  //the result will be an array with 1 object: [ { _id: null, averageRating: 0, numOfReviews: 0 } ]

  try {
    //now, we are accessing the 'Product' document in the database and looking for a product that the "_id" matches the "productId" we passed
    await mongoose.model('Product').findOneAndUpdate(
      { _id: productId },
      //here, we are updating the values of this product with the ones we got from the result
      {
        //Math.ceil is used to rturn the smallest integer greater than or equal to its numeric argument
        //we are used optional chaining here as well, because if we don't are any ratring, the value will be zero, and we will have a crash in our node app
        averageRating: Math.ceil(result[0]?.averageRating || 0),
        numOfReviews: result[0]?.numOfReviews || 0,
      }
    )
  } catch (error) {
    console.log(error)
  }
}

//this hook is involqued after we save when we call a post method
ReviewSchema.post('save', async function () {
  await this.constructor.calculateAverageRating(this.product)
})

//this hook is involqued after we delete when we call a post method
ReviewSchema.post('remove', async function () {
  await this.constructor.calculateAverageRating(this.product)
})

module.exports = mongoose.model('Review', ReviewSchema)
