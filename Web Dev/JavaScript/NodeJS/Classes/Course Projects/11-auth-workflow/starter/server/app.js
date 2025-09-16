//imports
require('dotenv').config() //this packeage makes it possible to use the .env file
require('express-async-errors') //this packeage automaticly sets a trycatch block every controller
const morgan = require('morgan') //this packeage shows the method, route, status code and time elapsed to get a response
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const rateLimiter = require('express-rate-limit')
const cors = require('cors') //you need cors when the front and back are on different domains
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

// express imports
const express = require('express') //import express
const app = express() //invoques express
const port = process.env.PORT || 5000 //setup port

//database
const connectDB = require('./db/connect') //import db connection function

//default middlewares
app.use(express.static('./public'))
app.use(morgan('tiny'))
app.use(express.json()) //parses incoming requests with JSON payloads
app.use(cookieParser(process.env.JWT_SECRET)) //keeps the cookie response to next requests with "req.cookies"
app.use(cors())
app.use(fileUpload())
app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
)
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

//default route
app.get('/', (req, res) => {
  res.send('<h1>Ecommerce API</h1>')
})

//route imports
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRoutes')

//route middlwares
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)

//error middlewares
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
app.use(notFoundMiddleware) //it's necessary to invoque the error middlewares after the routes
app.use(errorMiddleware)

//start server
const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI) //returns a promise, so it needs to have "await"
    app.listen(port, console.log(`Server is listening on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
