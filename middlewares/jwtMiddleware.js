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
function verifyJwt(token) {
  //----------------------------------------------------
  // const authorization = req.headers.authorization
  // if (authorization) {
  //   try {
  //     const checkUser = jwt.verify(authorization, jwtConfig.secret)
  //     req.user = checkUser
  //     next()
  //   } catch (error) {
  //     res.status(401).send('unauthorization')
  //   }
  // }
  //-----------------------------------------------------

}



const jwtFunctions = { signJwt, verifyJwt }
module.exports = jwtFunctions