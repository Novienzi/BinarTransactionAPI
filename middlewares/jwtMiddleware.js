const jwt = require('jsonwebtoken');
const { secret } = require('../jwtConfig');
const jwtConfig = require('../jwtConfig')

/**
 * create (sign) jwt token
 * @param {any} data data payload that want to be encoded as token
 * @returns {String} jwt token
 */
function signJwt(data) {
  const token = jwt.sign(data, jwtConfig.secret, jwtConfig.options)
  return token

}

/**
 * verify jwt token
 * @param {String} token jwt token
 * @returns {any} returns data payload
 */
function verifyJwt(req, res, next) {
  const authorization = req.headers.authorization
  if (authorization) {
    const token = authorization.split(' ')[1]
    try {
      const tokenPayload = jwt.verify(token, secret)
      req.user = tokenPayload
      next()
    } catch (error) {
      res.status(401).send('TOKEN EXPIRED, PLEASE RE-LOGIN')
    }
  } else {
    res.status(401).send('TOKEN REQUIRED')
  }

}



const jwtFunctions = { signJwt, verifyJwt }
module.exports = jwtFunctions