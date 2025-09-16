const mongoose = require('mongoose')
const { deleteMany } = require('./reviewModel')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image: {
      type: String,
      default: '/uploads/no-image.jpg',
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category'],
      enum: ['office', 'kitchen', 'bedroom'],
    },
    company: {
      type: String,
      required: [true, 'Please provide a product company'],
      enum: {
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
    colors: {
      type: [String],
      default: ['#222'],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 1,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
})

ProductSchema.pre('remove', async function () {
  //"this" refers to the current product that we are handling from the DB
  //"Review" is the model that is setted in the virtual above, by the ref
  //and then we use deleteMany to delete all reviews that have the "product" propertie matching the product._id (this._id)
  await this.model('Review').deleteMany({ product: this._id })
})

module.exports = mongoose.model('Product', ProductSchema)
