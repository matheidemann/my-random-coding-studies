const sendEmail = require('./sendEmail')

const sendResetPasswordEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  //this link is created on the frontend also, and the "/auth/reset-password" is on the node app route (so we can access the resetPassword function in the authController.js)
  console.log('VERIFICATION TOKEN : ' + verificationToken)
  const resetPasswordLink = `${origin}/user/reset-password?verificationToken=${verificationToken}&email=${email}`

  //the message that will be on the email
  const htmlMessage = `<p>Click here to reset your password: <a href="${resetPasswordLink}">Click Here</a> </p>`

  //send the email
  return sendEmail({
    to: email,
    subject: 'Reset your password',
    html: `<h4>Hello ${name}</h4>
    ${htmlMessage}`,
  })
}

module.exports = sendResetPasswordEmail
