const crypto = require('crypto')

//this function is used to hash a string
const hashString = (string) => {
  crypto.createHash('md5').update(string).digest('hex')
}

module.exports = hashString
