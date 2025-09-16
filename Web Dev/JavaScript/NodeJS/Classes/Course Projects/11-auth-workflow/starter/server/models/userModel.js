const mongoose = require('mongoose')
const validator = require('validator') //theis package is used to validate forms
const bcryptjs = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'Email already in use'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    maxlength: 100,
  },
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  verificationToken: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Date,
  },
})

//before we save the new user (pre), what we want to do
UserSchema.pre('save', async function () {
  //if the password is modified
  if (this.isModified('password')) {
    const salt = await bcryptjs.genSalt(10)
    //this.password points to the password in this document (UserMode.js)
    this.password = await bcryptjs.hash(this.password, salt)
  }
})

UserSchema.methods.comparePassword = async function ({ candidatePassword }) {
  //this.password is coming from the controller, we are accessing the found user, and then comparing the entered hashed password (candidatePassword) with the hashed password in the database (this.password)
  const isMatch = await bcryptjs.compare(candidatePassword, this.password)
  //returns true or false
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)
