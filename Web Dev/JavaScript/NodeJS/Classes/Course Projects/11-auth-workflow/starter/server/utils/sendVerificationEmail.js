const sendEmail = require('./sendEmail')

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  //this link is created on the frontend also, and the "/auth/verify-email" is on the node app route (so we can access the verifyEmail function in the authController.js)
  const verifyEmailLink = `${origin}/user/verify-email?verificationToken=${verificationToken}&email=${email}`

  //the message that will be on the email
  const htmlMessage = `<p>Please confirm your email by clicking on the following link: <a href="${verifyEmailLink}">Click Here</a> </p>`

  //send the email
  return sendEmail({
    to: email,
    subject: 'Email confirmation',
    html: `<h4>Hello ${name}</h4>
    ${htmlMessage}`,
  })
}

module.exports = sendVerificationEmail
